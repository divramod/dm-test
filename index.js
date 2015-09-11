var tasks = {};

// example
tasks.example = require("./tasks/example/index.js").start;

// automatically add tasks here
tasks.commander = require("./tasks/commander/index.js").start;
tasks.testAsync2 = require("./tasks/testAsync2/index.js").start;
tasks.testSync2 = require("./tasks/testSync2/index.js").start;
tasks.testAsync = require("./tasks/testAsync/index.js").start;
tasks.promise = require("./tasks/promise/index.js").start;
tasks.promise = require("./tasks/promise/index.js").start;

module.exports = tasks;
