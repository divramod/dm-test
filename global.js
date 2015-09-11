var co = require("co");
var jobs = {};
var program = require("commander");

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        function list(val) {
            return val.split(',').map(Number);
        }

        function param(val) {
            return val.split(',').map(String);
        }

        program
            .version('0.0.1')
            .option('-t, --template-engine [engine]', 'Add template [engine] support', 'jade')
            .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
            .option('-l, --list [items]', 'Specify list items defaulting to 1,2,3', list, [1, 2, 3])
            .option('-p, --param [items]', 'Specify parms', param )
            .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
            .option('-d --drink [drink]', 'Drink [coke|pepsi|izze]', /^(coke|pepsi|izze)$/i, 'izze')
            .parse(process.argv);

        console.log('  - template engine: %s', program.templateEngine);
        console.log('  - cheese: %s', program.cheese);
        console.log('  - list: %j', program.list);
        console.log('  - param: %j', program.param);
        console.log('  - size: %j', program.size);
        console.log('  - drink: %j', program.drink);


        // =========== [ get params from user input ] ===========
        //var argv2 = process.env.dmnJob || process.argv[2] || "help";

        //// =========== [ test ] ===========
        //if (["example", "-example"].indexOf(argv2) > -1) {
        //var task = require("./tasks/example/index.js");
        //yield task.start();
        //}

        //// automatically add tasks here

        //// =========== [ commander ] ===========
        //else if (['commander','com'].indexOf(argv2) > -1) {
        //var task = require("./tasks/commander/index.js");
        //task.start();
        //}
        //// =========== [ testAsync2 ] ===========
        //else if (['testAsync2'].indexOf(argv2) > -1) {
        //var task = require("./tasks/testAsync2/index.js");
        //task.start();
        //}
        //// =========== [ testSync2 ] ===========
        //else if (['testSync2'].indexOf(argv2) > -1) {
        //var task = require("./tasks/testSync2/index.js");
        //task.start();
        //}
        //// =========== [ testAsync ] ===========
        //else if (['testAsync'].indexOf(argv2) > -1) {
        //var task = require("./tasks/testAsync/index.js");
        //task.start();
        //}
        //// =========== [ promise ] ===========
        //else if (['promise'].indexOf(argv2) > -1) {
        //var task = require("./tasks/promise/index.js");
        //task.start();
        //}
        //// =========== [ promise ] ===========
        //else if (['promise'].indexOf(argv2) > -1) {
        //var task = require("./tasks/promise/index.js");
        //task.start();
        //}

        //// =========== [ getCommonTasks (dm-npm) ] ===========
        //else {
        //require("dm-npm").getCommonTasks(argv2, __dirname);
        //}

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
