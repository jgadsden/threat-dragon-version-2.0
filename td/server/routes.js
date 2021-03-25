const express = require('express');
const router = express.Router();

const version = require('./package.json').version;
var verbose = "default";

// access version
router.get('/version', (req, res) => {
  res.json({ version: version });
});

// request PDF
router.get('/pdf', (req, res) => {
  res.json({ pdf: "to do" });
});

// dynamic debug verbosity
router.get('/verbose', (req, res) => {
  res.json({ verbose: verbose });
});

router.post('/verbose', (req, res) => {
  verbose = req.body.verbose;
  res.json("Set verbosity");
});

module.exports = router;
