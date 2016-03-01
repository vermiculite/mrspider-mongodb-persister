"use strict";

let through2 = require('through2');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(options) {
    return through2.obj(function (page, enc, next) {
        var self = this;
        if(page.valid) {
            MongoClient.connect(options.url, function(err, db) {
                if(err) {
                    console.log('could not connect to the database at %s', options.url);
                    return next();
                }
                db.collection(options.collection).insertOne(page.data, function(err, result) {
                    db.close();
                    self.push(page);
                    next();
                });
            });
        } else {
            self.push(page);
            next();
        }
    });
};