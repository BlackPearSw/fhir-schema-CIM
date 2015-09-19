var schema = {
    title: 'CIM Appointment Profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Appointment'}
    ],
    properties: {
    }
};

module.exports = schema;

