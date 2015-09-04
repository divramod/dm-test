var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('testAsync2 async'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').start("testAsync2");
        result.should.equal("testAsync2");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').start("testAsync2");
        result.should.equal("falsetestAsync2");
    });

});
