var co = require("co");
var jobs = {};

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ test ] ===========
        if (["example", "-example"].indexOf(argv2) > -1) {
            var task = require("./tasks/example/index.js");
            yield task.start();
        }

        // automatically add tasks here

        // =========== [ testAsync2 ] ===========
        else if (['testAsync2'].indexOf(argv2) > -1) {
            var task = require("./tasks/testAsync2/index.js");
            task.start();
        }
        // =========== [ testSync2 ] ===========
        else if (['testSync2'].indexOf(argv2) > -1) {
            var task = require("./tasks/testSync2/index.js");
            task.start();
        }
        // =========== [ testAsync ] ===========
        else if (['testAsync'].indexOf(argv2) > -1) {
            var task = require("./tasks/testAsync/index.js");
            task.start();
        }
        // =========== [ promise ] ===========
        else if (['promise'].indexOf(argv2) > -1) {
            var task = require("./tasks/promise/index.js");
            task.start();
        }
        // =========== [ promise ] ===========
        else if (['promise'].indexOf(argv2) > -1) {
            var task = require("./tasks/promise/index.js");
            task.start();
        }

        // =========== [ getCommonTasks (dm-npm) ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
