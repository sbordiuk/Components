var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../pgp.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session = null;
  res.render('index', {
    title: 'Picopy',
    user:null
  });
});

module.exports = router;
