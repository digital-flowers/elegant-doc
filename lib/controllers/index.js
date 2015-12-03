var Controller = require("elegant-controller");

new Controller("/").get(function () {
    return "hello elegant";
});