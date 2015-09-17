var fhir = require('fhir-schema-dstu2');

var schema = {
    title: 'CIM Person profile',
    allOf: [
        fhir.schema.Person
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