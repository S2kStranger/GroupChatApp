const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

const loginPage=require('./login.js');
app.use(loginPage);

const chatPage=require('./chat.js');
app.use(chatPage);

app.get('/contactus',(req,res,next) => {
    res.sendFile(path.join(__dirname,'views','contactus.html'));
})

app.post('/success',(req,res,next) => {
    res.sendFile(path.join(__dirname,'views','success.html'));
})


// app.use((req,res,next) => {
//     res.status(404).sendFile(path.join(__dirname,'views','404Error.html'));
// })

app.listen(3000);