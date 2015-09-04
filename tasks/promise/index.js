// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require('co-child-process');


// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ ASYNC task.start() ] ===========
task.start = co.wrap(function*(command) {
    try {
        process.env.debug = false; // for debugging purposes
        var command = command || process.argv[3] || undefined;
        //var result =
        //yield runAsync(command);
        //
        var result =
            yield spawn(command, []);
        console.log(result);

        return yield Promise.resolve(result);
    } catch (e) {
        result.success = false;
        result.error = e;
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return yield Promise.resolve(e);
    }
}); // task.start()


// =========== [ ASYNC runAsync ] ===========
var runAsync = co.wrap(function*(command) {
    try {
        console.log("start promise");
        return yield Promise.resolve("promise");
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return yield Promise.resolve(e);
    }
}); // runAsync

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
