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
        validPage.spider = validSpider;
    });


    it('should call next given an invalid page', function (done) {
        var persister = mongodbPersister(validParams);
        persister._transform(validPage, done);
    });
    
    it('should call next given an valid page', function (done) {
        var persister = mongodbPersister(validParams);
        validPage.valid = true;
        persister._transform(validPage, done);
    });
});
