var Controller = require("elegant-controller");
var View = require("elegant-view");
var MySql = require("elegant-mysql");

new Controller("/").get(function () {
    return new View('index');
});


// Handle Newsletter Subscription
new Controller("/").post(function(){
    this.vars = {};
    var email = this.POST['email'];

    MySql.query("INSERT INTO `newsletter`(`email`) VALUES(?)", [email], this.$(function (err, rows, fields) {
        if(err){
            this.vars.msg = "Sorry , Please Try Again";
            console.log(err);
        }else{
            this.vars.msg = "Thank you for your subscription";
        }
    }));
}).ready(function () {
        return this.vars.msg;
});
