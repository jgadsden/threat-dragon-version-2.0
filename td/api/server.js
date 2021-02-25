const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/dist')));
const version = require('./package.json').version;

app.get('/api/version', (req, res) => {
  console.log(req.path, 'called')
  res.json({ version: version });
  console.log("sent version", version)
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});