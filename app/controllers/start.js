var Controller = require("elegant-controller");
var View = require("elegant-view");

new Controller("/start.html").get(function () {
    return new View('start');
});
