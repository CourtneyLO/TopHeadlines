var express = require('express');
var router = express.Router();
var request = require("request");


  router.get('/', (req,res) => {
    res.render('results')
  });


module.exports = router;