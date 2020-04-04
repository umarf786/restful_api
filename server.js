//Required files/dependencies 
const express = require('express');
const app = express();
require('dotenv/config');

//Import routes
const home = require('./routes/home');
const users = require('./routes/users');

//Use routes
app.use('/', home);
app.use('/users', users);

//Server starts listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})