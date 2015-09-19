var fhir = require('fhir-schema-dstu2');
var CIM = require('../../lib/index');
var profile = CIM.profiles.Schedule;

var expect = require('chai').expect;

describe('Schedule', function () {
    var data;

    beforeEach(function () {
        data = {
            "resourceType": "Schedule",
            "id": "84",
            "extension": [
                {
                    "url": "http://www.endeavourhealth.org/fhir/extension/Schedule/AdditionalActor",
                    "valueReference": {
                        "reference": "Location/b0dc90dd-ba48-4d12-88d9-f364a707dfef"
                    }
                }
            ],
            "actor": {
                "reference": "Practitioner/0c9bca2b-3a3a-43c3-879f-7552570040d6"
            },
            "planningHorizon": {
                "start": "2015-09-21T09:00:00+01:00",
                "end": "2015-09-21T17:00:00+01:00"
            }
        }
    });

    it('validates resource', function () {
        var result = fhir.validator.validate(data, profile);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });
});