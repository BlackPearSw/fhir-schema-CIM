var fhir = require('fhir-schema-dstu2');
var _ = require('lodash');
var requireDirectory = require('require-directory');

var base = _.cloneDeep(fhir.formats);
module.exports = _.merge(base, requireDirectory(module));
