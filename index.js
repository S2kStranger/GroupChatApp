const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const errorPage=require('./controllers/error404');
const contactPage=require('./controllers/controllercontactus');
const successPage=require('./controllers/controllersuccess');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

const loginPage=require('./login.js');
app.use(loginPage);

const chatPage=require('./chat.js');
app.use(chatPage);

app.get('/contactus',contactPage.contactUs);

app.post('/success',successPage.success);


app.use(errorPage.error);

app.listen(3000);