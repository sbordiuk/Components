var express = require('express');
var router = express.Router();
var db = require('../pgp.js');

router.post('/', function(req, res, next) {
    console.log(req.body);
    var query = `select * from p_user where username = '${req.body.username}' and pwd = '${req.body.password}'`;
	  db.any(query)
        .then(function (p) {
            console.log(p);
            res.render('index', {
                title: 'Picopy',
                user:p[0]
              });
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            console.log(err);
        })


  });
  
module.exports = router;