/*1. create a separate folder for server code
2. open that folder in cmd
3. To create package json file for that folder, run 'npm init --yes'
4. To install dependencies , run ' npm i --save express body-parser cors'
express is our server
body parser is our middle ware to handle data
cors is package to req across diff ports
for the portability across diff port platforms */




// Begin with importing packages(dependencies) we installed
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//create constant of name PORT , to specify where the server should run open
const PORT = 3000;

// create an instance for the express
const app = express();

// with express instance, say body parser to handle json data
app.use(bodyParser.json());

//with express instance, use cors to access specified port
app.use(cors());

//test a get request from the express instance with call back func
app.get('/', function(req,res){
    res.send('Hello from server');
 //  res.status(200).send({"message": "Data Sent"});
})

app.post('/loggedIn',function(req,res){
console.log(req.body);
res.status(200).send({"message": "Data received"});
})


//listen to port specifed and log the message into console
app.listen(PORT, function(){
    console.log('Server running on localhost :'+ PORT);
})

