var express = require('express');
var router = express.Router();
var request = require("request");

router.route('/')
  .post(function(req, res, next) {
    // console.log(req.body.q)
  mySearch = {
   search:req.body.q,
 };

 request({
   uri: 'http://api.ft.com/content/search/v1?apiKey=ercgrchspx5ku37xnzngy5qq',
   json: true,
   method: 'POST',
   body: {
     "queryString": mySearch.search,
     "queryContext" : {
    "curations" : [ "ARTICLES"]},
     "resultContext" : {
    "aspects" :[  "title","lifecycle","location","summary","editorial" ]}
     }

   }, function (error, response, body) {
     console.log(mySearch.search)
      var jsonStr = JSON.stringify(body.results[0]);
      res.send(jsonStr)
   });
})

module.exports = router;
