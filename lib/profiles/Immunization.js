var schema = {
    title: 'CIM Immunization Profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Immunization'}
    ],
    properties: {
    }
};

module.exports = schema;

