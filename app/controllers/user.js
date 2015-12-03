var View = require("elegant-view");
var File = require("elegant-file");
var Error = require("elegant-error");
var Redirect = require("elegant-redirect");
var MySql = require("elegant-mysql");

var Controller = require("elegant-controller");
new Controller("/user/login").get(function () {
    this.vars = {};
    MySql.query("SELECT * FROM `user` where id = " + this.PARAMS["id"],
        this.$(function (err, rows, fields) {
            if (!err) {
                this.vars.user = rows[0];
            }
        })
    );
}).ready(function () {
        if (this.vars.user) {
            this.SESSION.set("user", this.vars.user);
            return new Redirect("/user");
        } else {
            return "login failed try again!";
        }
    });

new Controller("/user").get(function () {
    var user = this.SESSION.get("user");
    if (user) {
        return "welcome " + user.name;
    } else {
        return new Error(404);
    }
});

new Controller("/user/logout").get(function () {
    this.SESSION.set("user", null);
    return "logged out!"
});