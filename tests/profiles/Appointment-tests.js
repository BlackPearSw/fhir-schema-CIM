var fhir = require('fhir-schema-dstu2');
var CIM = require('../../lib/index');
var profile = CIM.profiles.Appointment;

var expect = require('chai').expect;

describe('Appointment', function () {
    var data;

    beforeEach(function () {
        data = {
            "resourceType": "Appointment",
                "id": "145",
                "status": "booked",
                "start": "2015-09-15T09:00:00.000+01:00",
                "end": "2015-09-15T10:00:00.000+01:00",
                "slot": [
                {
                    "reference": "Slot/145"
                }
            ],
                "participant": [
                {
                    "actor": {
                        "reference": "Patient/11af0e7f-be18-431e-9be9-fd1adb2f0742"
                    },
                    "required": "required",
                    "status": "accepted"
                },
                {
                    "actor": {
                        "reference": "Practitioner/2190964b-2d34-4eaa-8c60-9fbc086748a9"
                    },
                    "required": "required",
                    "status": "accepted"
                },
                {
                    "actor": {
                        "reference": "Location/b0dc90dd-ba48-4d12-88d9-f364a707dfef"
                    },
                    "required": "required",
                    "status": "accepted"
                }
            ]
        };
    });

    it('validates resource', function () {
        var result = fhir.validator.validate(data, profile);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });
});