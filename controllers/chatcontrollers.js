const fs=require('fs');

exports.postMessage = (req, res, next) => {
    //console.log(req.body);
    var msg = req.body.message;
    if (msg != undefined) {
        //frame the message and save it into the file message.txt
        const message = `${req.body.uname} : ${msg} \n`;
        fs.appendFileSync("message.txt", message);
    }
    //redirecting the file to '/'
    res.redirect('/');
}

exports.getMessage = (req, res, next) => {
    fs.readFile("message.txt", (err, data) => {
        //if there is an error like of a file doesn't exist it will say "No chat exist"
        if (err) { data = "No chat exist" }
        //it sends response as a new page everytime
        //res.send(`${data}<form action="/" method="POST" onsubmit={uname.value=localStorage.getItem("username")};><input type="hidden" name="uname" id="uname"><input type="text" name="message" id="message"><br><button type="submit">Send</button></form>`);
        //res.sendFile(path.join(__dirname,'views','chat.html'));
        res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Chats</title><link rel="stylesheet" href="/css/chat.css"></head><body><header class="main-header"><nav class="main-header_nav"><ul class="main-header_nav_list"><li class="main-header_nav_item"><a href="login" class="active">Home</a></li> <li class="main-header_nav_item"><a href="contactus">Contact US</a></li></ul></nav></header><form action="/" method="POST" class="my-form" onsubmit={uname.value=localStorage.getItem("username")}><h2>Write your message here.</h2><input  type="hidden" id="uname" name="uname"><input type="text" name="message" id="message" class="msg"><button type="submit" class="btn">Send</button></form>${data}</body></html>`)
    })

}