const express = require('express');
const cors = require('cors');
const mongoos = require('mongoose');
var bodyParser = require('body-parser') 
 require('dotenv').config();

 const app = express();
 const port = process.env.port || 5000;
 var mongoDB = 'mongodb://127.0.0.1:27017/raresea';
 mongoos.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true});
 const connection = mongoos.connection;
 app.use(express.static('public'));
 connection.once('open', ()=>{
     console.log("MongoDB database connection established successfully");
 });
 app.use(cors());
 app.use(express.json());
 
 app.use(express.static(__dirname +'/public'));

 app.use(bodyParser.urlencoded({ extended: true }));
 app.set('view engine', 'ejs');
 const route = require('./routes');
 
 app.use('/api', route);
 

 app.listen(port, () =>{
     console.log(`Server is running on port: ${port}`);
 })