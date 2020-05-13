//Required files/dependencies, env and database
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/database');
var cors = require('cors');
app.use(cors());
//Parse JSON
app.use(express.json());
app.use(express.urlencoded());

//Import routes
const home = require('./routes/home');
const users = require('./routes/users');

//Use routes and parse JSON
app.use('/', home);
app.use('/users', users);

//Connect to MongoDB Database
connectDB();

//Server starts listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
