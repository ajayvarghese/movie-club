const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routes/user.route'); // Imports routes for the products

const app = express();

let dev_db_url = 'mongodb://mvclubadmin:saralmohan007@ds155596.mlab.com:55596/movie-club-db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', user);

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});