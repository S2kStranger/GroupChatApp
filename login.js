
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res, next) => {
    //redirecting to '/' file 
    res.send('<form action="/" method="POST" onsubmit=localStorage.setItem("username",document.getElementById("username").value);><input type="text" name="username" id="username"><button type="submit">Send</button></form>')
});

module.exports = router;