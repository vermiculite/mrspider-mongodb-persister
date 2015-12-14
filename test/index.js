var mongodbPersister = require('..');

describe('mrspider mongodb persister', function () {

    var validPage;
    var validSpider;
    var validNext;


    beforeEach(function () {
        validPage = {};
        validSpider = {};
        validNext = {};
    });


    it('should call next', function (done) {
        var persister = mongodbPersister();
        persister(validPage, validSpider, done);
    });
});
