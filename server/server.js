require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
// const mongoose = require('mongoose');
const routes = require('./routes/index');

var passport = require('passport'); // at headerapp.use(passport.initialize()); // after line no.20 (express.static)
require("./config/passport");
// mongoose.Promise = global.Promise;
// mongoose.connect(config.rsvpDb, { useNewUrlParser: true }).then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Cannot connect to the database'+ err)}
// );

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});