var fhir = require('fhir-schema-dstu2');
var CIM = require('../../lib/index');

var expect = require('chai').expect;

describe('Patient', function () {
    var data;
    var schema = CIM.profiles.Patient;

    beforeEach(function () {
        data =
        {
            "resourceType": "Patient",
            "id": "11af0e7f-be18-431e-9be9-fd1adb2f0742",
            "identifier": [
                {
                    "system": "urn:fhir.nhs.uk:id/NHSNumber",
                    "value": "9366339786"
                }
            ],
            "name": [
                {
                    "use": "official",
                    "text": "BARNEY, Kendrick (Master)",
                    "family": [
                        "Barney"
                    ],
                    "given": [
                        "Kendrick"
                    ],
                    "prefix": [
                        "Master"
                    ]
                },
                {
                    "use": "old",
                    "text": "SALVATORE, Kendrick (Master)",
                    "family": [
                        "Salvatore"
                    ],
                    "given": [
                        "Kendrick"
                    ],
                    "prefix": [
                        "Master"
                    ]
                }
            ],
            "telecom": [
                {
                    "system": "phone",
                    "value": "02227820842",
                    "use": "home"
                }
            ],
            "gender": "male",
            "birthDate": "2007-08-24",
            "address": [
                {
                    //"use": "?",
                    "text": "59 Lincombe Drive, Leeds, West Yorkshire, LS8 1PS",
                    "line": [
                        "59 Lincombe Drive",
                        "Leeds",
                        "West Yorkshire"
                    ],
                    "city": "Leeds",
                    "state": "West Yorkshire",
                    "postalCode": "LS8 1PS"
                }
            ]
        }
    });

    it('validates resource', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    describe('identifier', function () {
        it('must be present', function () {
            delete data.identifier;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must include NHS Number', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk:id/NHSNumberXX';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must have a value', function () {
            delete data.identifier[0].value;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must allow additional identifiers', function () {
            data.identifier.push({
                system: 'http://health.org/id',
                value: '123'
            });

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });
    });

    describe('name', function () {
        it('must be present', function () {
            delete data.name;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must include at least one name', function () {
            data.name = [];

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('gender', function () {
        it('must be present', function () {
            delete data.gender;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('birthDate', function () {
        it('must be present', function () {
            delete data.birthDate;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});