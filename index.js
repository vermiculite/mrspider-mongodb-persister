"use strict";

let through2 = require('through2');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(options) {
    return through2.obj(function (page, next) {
        if(page.valid) {
            MongoClient.connect(options.url, function(err, db) {
                if(err) {
                    console.log('could not connect to the database at %s', options.url);
                    return next();
                }
                db.collection(options.collection).insertOne(page.data, function(err, result) {
                    db.close();
                    next();
                });
            });
        } else {
            next();
        }
    });
};