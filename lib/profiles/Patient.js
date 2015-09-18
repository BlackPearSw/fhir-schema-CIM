var schema = {
    title: 'CIM Patient profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Patient'}
    ],
    required: ['identifier', 'name', 'gender', 'birthDate'],
    properties: {
        identifier: {
            minItems: 1,
            items: [
                {
                    required: ['system', 'value'],
                    properties: {
                        system: {
                            pattern: '^urn:fhir.nhs.uk:id/NHSNumber$'
                        }
                    }
                }
            ],
            additionalItems: {
                required: ['value']
            }
        },
        name: {
            type: 'array',
            minItems: 1
        }
    }
};

module.exports = schema;

