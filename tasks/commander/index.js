// =========== [ REQUIRE ] ===========
var co = require("co");
var program = require("commander");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(p1) {
    try {
        program
            .version('0.0.1')
            .option('-C, --chdir <path>', 'change the working directory')
            .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
            .option('-T, --no-tests', 'ignore test hook');
        return program;
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()


// =========== [ MODULE EXPORT ] ===========
module.exports = task;
