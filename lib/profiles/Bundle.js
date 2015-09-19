var schema = {
    title: 'CIM Bundle Profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Bundle'}
    ],
    properties: {
        base: {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/uri'} //TODO:temp fix : changed 2015May -> 2015Sep
    }
};

module.exports = schema;

