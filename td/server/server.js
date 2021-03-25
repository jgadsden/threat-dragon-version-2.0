const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express(),
      bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/dist')));

app.use('/api', router);

//catch undefined routes and respond with 404
app.use(function(req, res, next) {
  res.status(404).send("Not found")
});

// catch server errors and respond with 500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Server error')
})

module.exports = app;
