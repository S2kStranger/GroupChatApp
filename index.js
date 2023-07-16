const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const loginPage=require('./login.js');
app.use(loginPage);

const chatPage=require('./chat.js');
app.use(chatPage);

app.listen(3000);