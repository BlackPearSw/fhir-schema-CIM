var schema = {
    title: 'CIM Condition Profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Condition'}
    ],
    properties: {
        dateAsserted: {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/dateTime'} //TODO: [CIM-62] temp fix : changed 2015May -> 2015Sep
    }
};

module.exports = schema;

