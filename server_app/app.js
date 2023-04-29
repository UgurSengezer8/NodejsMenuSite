const express = require('express');
const path = require('path');
const app = express()
const db = require('./models/db');

var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use('/public',express.static(path.join(__dirname,"../public")))


app.use(fileUpload())

app.use(express.json());
app.use(express.urlencoded({extended:true}));





var route = require(path.join(__dirname,'routes/indexRoutes'));
var menuRoute = require(path.join(__dirname,'routes/menuRoutes'));


app.get('/',route);
app.post('/',route);
app.post('/menu',menuRoute);
app.get('/menu',menuRoute);
app.get('/menuadd',menuRoute);
app.get('/yemek/add',route);
app.post('/yemek/add',route);


app.get('/menu/:id',menuRoute);





app.listen(5500);