var validate = require('validate');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(options) {
    validateOptions(options);
    return function (page, spider, next) {
        next();
    }
};

function validateOptions (options) {
    if(!options) {
        throw new Error('No options passed to mrspider mongodb persister');
    }
    if(!options.db) {
        throw new Error('No db property passed to mrspider mongodb persister');
    }
    if(!options.db.url) {
        throw new Error('No db.url property passed to mrspider mongodb persister');
    }
    if(!options.db.collection) {
        throw new Error('No db.collection property passed to mrspider mongodb persister');
    }
}
