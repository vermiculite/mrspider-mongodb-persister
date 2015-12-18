var mongodbPersister = require('..');

var chai = require('chai');
var should = chai.should();

describe('mrspider mongodb persister', function () {

    var validPage;
    var validSpider;
    var validNext;
    var validParams;


    beforeEach(function () {
        validPage = {};
        validSpider = {};
        validNext = {};
        validParams = {
            url: 'mongodb://localhost:27017/myproject',
            collection: 'mycollection'
        };
    });


    it('should call next', function (done) {
        var persister = mongodbPersister(validParams);
        persister(validPage, validSpider, done);
    });

    it('should throw an error given no options', function () {
        (function () {
            var persister = mongodbPersister();
        }).should.throw(Error);
    });


    it('should throw an error given no url property in the options', function () {
        delete validParams.url;
        (function () {
            var persister = mongodbPersister(validParams);
        }).should.throw(Error);
    });

    it('should throw an error given no collection db property in the options', function () {
        delete validParams.collection;
        (function () {
            var persister = mongodbPersister(validParams);
        }).should.throw(Error);
    });
});
