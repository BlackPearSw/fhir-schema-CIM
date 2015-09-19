var fhir = require('fhir-schema-dstu2');
var CIM = require('../../lib/index');
var profile = CIM.profiles.Slot;

var expect = require('chai').expect;

describe('Slot', function () {
    var data;

    beforeEach(function () {
        data = {
            "resourceType": "Slot",
            "id": "748",
            "schedule": {
                "reference": "Schedule/84"
            },
            "freeBusyType": "free", //TODO: Changed to lowercase 2015May -> 2015Sep
            "start": "2015-09-21T09:00:00.000+01:00",
            "end": "2015-09-21T10:00:00.000+01:00"
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