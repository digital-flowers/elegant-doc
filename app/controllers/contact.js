var Controller = require("elegant-controller");
var View = require("elegant-view");
var nodemailer = require("nodemailer");

new Controller("/contact.html").get(function () {
    return new View('contact');
});


new Controller("/contact.html").post(function () {
    this.vars = {};
    this.vars.msg = "<b>Thanks!</b> We appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often."
    var email = this.POST['email'];
    var name = this.POST['name'];
    var phone = this.POST['phone'];
    var message = this.POST['message'];

    var transport = nodemailer.createTransport("SMTP", {
        host: "smtp.gmail.com", // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: "hassanalnator@gmail.com",
            pass: "hassan@12345"
        }
    });

    var mailOptions = {
        from: ""+name+"<"+email+">", // sender address
        to: "hassanalnator@gmail.com, digital.flowers@hotmail.com", // list of receivers
        subject: "Elegant Contact Form", // Subject line
        text: "Contact Form", // plaintext body
        html: "<h2>Contact Form Submit By : "+name+"</h2><ul><li>phone:"+phone+"</li><li>Message:"+message+"</li></ul>" // html body
    }

    transport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

    });

    return new View('contact',this.vars);
});
