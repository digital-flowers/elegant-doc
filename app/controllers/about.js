var Controller = require("elegant-controller");
var View = require("elegant-view");

new Controller("/about.html").get(function () {
    return new View('about');
});