const express = require('express');
const router = express.Router();
const path = require('path');
const fs=require('fs');

router.get('/', (req, res, next) => {
    //Reading file and writing data and calling the '/' page again on get method
    fs.readFile("message.txt",(err,data) => {
        //if there is an error like of a file doesn't exist it will say "No chat exist"
         if(err){data="No chat exist"}
         //it sends response as a new page everytime
        res.send(`${data}<form action="/" method="POST" onsubmit={uname.value=localStorage.getItem("username")};><label id="text"></label></div><input type="hidden" name="uname" id="uname"><input type="text" name="message" id="message"><br><button type="submit">Send</button></form>`)
    })
});


// Sends post method when we write the data into the file 
router.post('/', (req, res, next) => {
    var msg=req.body.message;
    if(msg!=undefined)
    {
        //frame the message and save it into the file message.txt
        const message=`${req.body.uname} : ${msg} \n`;
        fs.appendFileSync("message.txt",message);
    }
    //redirecting the file to '/'
    res.redirect('/');
});

module.exports = router;