var fhir = require('fhir-schema-dstu2');
var CIM = require('../../../lib/index');
var profile = CIM.profiles.clinical.Condition;

var expect = require('chai').expect;

describe('Condition', function () {
    var data;
    var validator;

    before(function () {
        validator = new fhir.Validator(fhir.schema, CIM.formats);
    });

    beforeEach(function () {
        data ={
            "resourceType": "Condition",
            "id": "c2bb5f75-f2a0-492f-a92d-0d234f6ba388",
            "contained": [
                {
                    "resourceType": "List",
                    "id": "condition-links",
                    "status": "current",
                    "mode": "working",
                    "entry": [
                        {
                            "flag": [
                                {
                                    "coding": [
                                        {
                                            "system": "urn:fhir.nhs.uk:vs/ConditionLinkType",
                                            "code": "has-association",
                                            "display": "Has association"
                                        }
                                    ]
                                }
                            ],
                            "item": {
                                "reference": "Observation/0b600946-fd65-45fc-bb8a-cf5db9640d26"
                            }
                        },
                        {
                            "flag": [
                                {
                                    "coding": [
                                        {
                                            "system": "urn:fhir.nhs.uk:vs/ConditionLinkType",
                                            "code": "has-association",
                                            "display": "Has association"
                                        }
                                    ]
                                }
                            ],
                            "item": {
                                "reference": "MedicationPrescription/70ba29ad-f06b-4286-bb12-352b125ce56f"
                            }
                        },
                        {
                            "flag": [
                                {
                                    "coding": [
                                        {
                                            "system": "urn:fhir.nhs.uk:vs/ConditionLinkType",
                                            "code": "has-association",
                                            "display": "Has association"
                                        }
                                    ]
                                }
                            ],
                            "item": {
                                "reference": "MedicationPrescription/f849b25f-5d19-44f2-9edc-efc1474bd39e"
                            }
                        },
                        {
                            "flag": [
                                {
                                    "coding": [
                                        {
                                            "system": "urn:fhir.nhs.uk:vs/ConditionLinkType",
                                            "code": "has-association",
                                            "display": "Has association"
                                        }
                                    ]
                                }
                            ],
                            "item": {
                                "reference": "Observation/fafd3526-4784-4b21-8023-df37d03a8fb6"
                            }
                        },
                        {
                            "flag": [
                                {
                                    "coding": [
                                        {
                                            "system": "urn:fhir.nhs.uk:vs/ConditionLinkType",
                                            "code": "has-association",
                                            "display": "Has association"
                                        }
                                    ]
                                }
                            ],
                            "item": {
                                "reference": "Observation/3c9c711a-3a19-4f7c-b08e-48cb41d5cbfd"
                            }
                        }
                    ]
                }
            ],
            "extension": [
                {
                    "url": "urn:fhir.nhs.uk:extension/ConditionLink",
                    "valueReference": {
                        "reference": "#condition-links"
                    }
                }
            ],
            "patient": {
                "reference": "Patient/11af0e7f-be18-431e-9be9-fd1adb2f0742"
            },
            "encounter": {
                "reference": "Encounter/4c59260a-2195-4372-80aa-06b1c435b21f"
            },
            "asserter": {
                "reference": "Practitioner/725b79bc-36b1-408c-ae56-771b6b5d079e"
            },
            "dateAsserted": "2008-06-03",
            "code": {
                "coding": [
                    {
                        "system": "READ2",
                        "code": "H00-2",
                        "display": "Coryza - acute"
                    },
                    {
                        "system": "http://snomed.info/sct",
                        "code": "82272006",
                        "display": "Coryza - acute"
                    }
                ],
                "text": "Coryza - acute"
            },
            "category": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/condition-status",
                        "code": "confirmed",
                        "display": "Confirmed"
                    }
                ]
            },
            "severity": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/vs/condition-severity",
                        "code": "255604002",
                        "display": "Mild"
                    }
                ]
            }
        }
    });

    it('validates resource', function () {
        var result = validator.validate(data, profile);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    /*
    describe('identifier', function () {
        it('must be present', function () {
            delete data.identifier;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must include NHS Number', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk:id/NHSNumberXX';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must have a value', function () {
            delete data.identifier[0].value;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('name', function () {
        it('must be present', function () {
            delete data.name;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must include at least one name', function () {
            data.name = [];

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('gender', function () {
        it('must be present', function () {
            delete data.gender;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('birthDate', function () {
        it('must be present', function () {
            delete data.birthDate;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });
    */
});