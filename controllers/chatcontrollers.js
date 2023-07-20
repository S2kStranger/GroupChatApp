const fs=require('fs');
const model=require('../models/msgfunctions');

exports.postMessage = (req, res, next) => {
    //console.log(req.body);
    var msg = req.body.message;
    var username=req.body.uname;
    if (msg != undefined) {
        //frame the message and save it into the file message.txt
        model.save(username,msg);
    }
    //redirecting the file to '/'
    res.redirect('/');
}

exports.getMessage = (req, res, next) => {
    model.fetchMsg(data => {
        res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Chats</title><link rel="stylesheet" href="/css/chat.css"></head><body><header class="main-header"><nav class="main-header_nav"><ul class="main-header_nav_list"><li class="main-header_nav_item"><a href="login" class="active">Home</a></li> <li class="main-header_nav_item"><a href="contactus">Contact US</a></li></ul></nav></header><form action="/" method="POST" class="my-form" onsubmit={uname.value=localStorage.getItem("username")}><h2>Write your message here.</h2><input  type="hidden" id="uname" name="uname"><input type="text" name="message" id="message" class="msg"><button type="submit" class="btn">Send</button></form>${data}</body></html>`)
    });
    

}