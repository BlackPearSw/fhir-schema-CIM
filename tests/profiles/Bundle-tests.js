var fhir = require('fhir-schema-dstu2');
var CIM = require('../../lib/index');
var profile = CIM.profiles.Bundle;

var expect = require('chai').expect;

describe('Bundle', function () {
    var data;

    beforeEach(function () {
        data = {
            "resourceType": "Bundle",
            "id": "d36a0fb2-0737-4218-9045-9228fa497578",
            "type": "searchset",
            "base": "http://endeavour-cim.cloudapp.net/api/0.1/A99999",
            "total": 4,
            "entry": [
                {
                    "resource": {
                        "resourceType": "Schedule",
                        "id": "81",
                        "extension": [
                            {
                                "url": "http://www.endeavourhealth.org/fhir/extension/Schedule/AdditionalActor",
                                "valueReference": {
                                    "reference": "Location/b0dc90dd-ba48-4d12-88d9-f364a707dfef"
                                }
                            }
                        ],
                        "actor": {
                            "reference": "Practitioner/2190964b-2d34-4eaa-8c60-9fbc086748a9"
                        },
                        "planningHorizon": {
                            "start": "2015-09-21T09:00:00+01:00",
                            "end": "2015-09-21T17:00:00+01:00"
                        }
                    }
                },
                {
                    "resource": {
                        "resourceType": "Schedule",
                        "id": "82",
                        "extension": [
                            {
                                "url": "http://www.endeavourhealth.org/fhir/extension/Schedule/AdditionalActor",
                                "valueReference": {
                                    "reference": "Location/b0dc90dd-ba48-4d12-88d9-f364a707dfef"
                                }
                            }
                        ],
                        "actor": {
                            "reference": "Practitioner/725b79bc-36b1-408c-ae56-771b6b5d079e"
                        },
                        "planningHorizon": {
                            "start": "2015-09-21T09:00:00+01:00",
                            "end": "2015-09-21T17:00:00+01:00"
                        }
                    }
                },
                {
                    "resource": {
                        "resourceType": "Schedule",
                        "id": "83",
                        "extension": [
                            {
                                "url": "http://www.endeavourhealth.org/fhir/extension/Schedule/AdditionalActor",
                                "valueReference": {
                                    "reference": "Location/b0dc90dd-ba48-4d12-88d9-f364a707dfef"
                                }
                            }
                        ],
                        "actor": {
                            "reference": "Practitioner/a30f6703-0482-4952-a110-f5a27355ff60"
                        },
                        "planningHorizon": {
                            "start": "2015-09-21T09:00:00+01:00",
                            "end": "2015-09-21T17:00:00+01:00"
                        }
                    }
                },
                {
                    "resource": {
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
                }
            ]
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