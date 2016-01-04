var MongoClient = require('mongodb').MongoClient;

module.exports = function(options) {
    validateOptions(options);
    return function (page, spider, next) {
        if(page.valid) {
            MongoClient.connect(options.url, function(err, db) {
                if(err) {
                    console.err('could not connect to the database at %s', options.url);
                    return next();
                }
                db.collection(option.collection).insertOne(page.data, function(err, result) {
                    db.close();
                    next();
                });
            });
        } else {
            next();
        }
    }
};

function validateOptions (options) {
    if(!options) {
        throw new Error('No options passed to mrspider mongodb persister');
    }
    if(!options.url) {
        throw new Error('No db.url property passed to mrspider mongodb persister');
    }
    if(!options.collection) {
        throw new Error('No db.collection property passed to mrspider mongodb persister');
    }
}
