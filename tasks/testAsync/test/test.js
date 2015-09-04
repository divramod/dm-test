var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('testAsync asyn'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').startAsync("testAsync");
        result.should.equal("testAsync");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').startAsync("testAsync");
        result.should.equal("falsetestAsync");
    });

});
