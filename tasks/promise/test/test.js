var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe.only('promise sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("ls");
        result.should.equal("promise");
    });

    // =========== [ start ] ===========
    it('error: should ...', function error() {
        var result = require('./../index.js').start();
        result.should.equal("falsepromise");
    });

});

// =========== [ dm-file TESTS ] ===========
describe.only('promise async'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
      var command = 'echo "What"  && read input_vriable && echo "$input_variable"';
        var result =
            yield require('./../index.js').start("input test && echo $test");
        result.should.equal("promise");
    });

    // =========== [ start ] ===========
    it.skip('error: should ...', function* error() {
        var result =
            yield require('./../index.js').startc();
        result.should.equal("falsepromise");
    });

});
