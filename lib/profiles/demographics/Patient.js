var fhir = require('fhir-schema-dstu2');

var schema = {
    title: 'CIM Patient profile',
    allOf: [
        fhir.schema.Patient
    ],
    required: ['identifier', 'name', 'gender', 'birthDate'],
    properties: {
        identifier: {
            type: 'array',
            minItems: 1,
            items: {
                required: ['value']
            },
            format: 'CIM.Patient.identifier'
        },
        name: {
            type: 'array',
            minItems: 1
        }
    }
};

module.exports = schema;

