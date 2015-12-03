var Controller = require("elegant-controller");
var View = require("elegant-view");

new Controller("/doc.html").get(function () {
    return new View('doc');
});
