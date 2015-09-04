var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('testSync2 asyn'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').start("testSync2");
        result.should.equal("testSync2");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').start("testSync2");
        result.should.equal("falsetestSync2");
    });

});
