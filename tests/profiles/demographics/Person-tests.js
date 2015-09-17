var fhir = require('fhir-schema-dstu2');
var CIM = require('../../../lib/index');

var expect = require('chai').expect;

describe('Person', function () {
    var data;
    var schema = CIM.profiles.demographics.Person;
    var validator;

    before(function () {
        validator = new fhir.Validator(fhir.schema, CIM.formats);
    });

    beforeEach(function () {
        data = {
            "resourceType": "Person",
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
            "gender": "male",
            "birthDate": "2007-08-24"
        }
    });

    it('validates resource', function () {
        var result = validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    describe('identifier', function () {
        it('must be present', function () {
            delete data.identifier;

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must have a value', function () {
            delete data.identifier[0].value;

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('name', function () {
        it('must be present', function () {
            delete data.name;

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must include at least one name', function () {
            data.name = [];

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('gender', function () {
        it('must be present', function () {
            delete data.gender;

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('birthDate', function () {
        it('must be present', function () {
            delete data.birthDate;

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});