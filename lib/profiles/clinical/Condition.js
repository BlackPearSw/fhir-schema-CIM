var FHIR_DSTU2 = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var _ = require('lodash');

var schema = FHIR_DSTU2.resources.Condition();
schema.title = 'CIM Condition Profile';

//TODO: temp fixes to validate current resources
_.remove(schema.required, function(item){
    return item === 'verificationStatus'
});
schema.properties.dateAsserted = schema.properties.dateRecorded;

module.exports = schema;

