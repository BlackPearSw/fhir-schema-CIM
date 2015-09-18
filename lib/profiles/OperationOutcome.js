var schema = {
    title: 'CIM OperationOutcome Profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/OperationOutcome'}
    ]
};

module.exports = schema;

