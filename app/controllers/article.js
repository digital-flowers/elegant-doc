var Controller = require("elegant-controller");
var View = require("elegant-view");
var MySql = require("elegant-mysql");

// first controller (add article page)
new Controller("add/article").get(function () {
    return new View("add-article");
});

// second controller (save article data)
new Controller("add/article").post(function () {
    this.vars = {};

    // Fetch Post Parameters
    this.vars.title = this.POST['title'];
    this.vars.description = this.POST['description'];
    MySql.query("INSERT INTO `articles`(`title`,'description') VALUES(?,?)", [this.vars.title, this.vars.description], this.$(function (err, rows, fields) {
        if(err){
            this.vars.success = "no";
        }else{
            this.vars.success = "yes";
        }
    }));
}).ready(function () {
        return new View("add-article", this.vars);
    });