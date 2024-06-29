const express = require('express');
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));


app.use('/', require('./routes'));
app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    console.log(`Server Running on Port - ${port}`); 
});
