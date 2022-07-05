const dotenv = require('dotenv').config()
const path = require('path')
const express = require('express');
const app = express();
const expresslayouts = require('express-ejs-layouts');
const mongoDbconnection = require('./config/db');

//envirment
const PORT = process.env.SERVER_PORT || 5000;

//mongodo db connection
mongoDbconnection();

//body data
app.use(express.json())
app.use(express.urlencoded({ extended : false }))


//static folder
app.use('/assets',express.static(path.join(__dirname  + '/assets')));


//ejs
app.set("view engine", "ejs");
app.set("layout", 'layouts/app');
app.use(expresslayouts);


//routes
app.use('/student', require('./routes/StudentRoutes'))


//server lisen
app.listen(PORT , () => console.log(`server is runnign on port ${PORT}`))
