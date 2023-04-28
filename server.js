//This line imports the Express module
const express = require('express');
//This line creates a new instance of the Express application
const app = express();

const port = 3000;

app.use('/', require('./routes'));

//This line tells the server to start listening for incoming requests
app.listen(process.env.port || port);

console.log('http://localhost:' + (process.env.port || port) + '/');
