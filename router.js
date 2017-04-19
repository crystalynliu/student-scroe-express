var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello, world!' })
})

module.exports = router