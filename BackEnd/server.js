var express = require("express");
var app = express();
// Use the application off of express

app.get("/", function(request,response){
    response.sendFile(__dirname+"../FrontEnd/signup.html");
});

app.get("/gatemail",function(request,response){
    var eMail = request.query.eMail;
    if (firstname != ""){
        
    }
})