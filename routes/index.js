var express = require('express');
var router = express.Router();
var request = require("request");

router.route('/')
.get(function(req, res, next) {
  request({
    uri: 'http://api.ft.com/content/search/v1?apiKey=' + process.env.API_KEY,
    json: true,
    method: 'POST',
    body: {
      "queryContext" : {
        "curations" : [ "ARTICLES"]},
        "resultContext" : {
          "aspects" :[  "title","lifecycle","location","summary","editorial" ]}
        }

      }, function (error, response, body) {
        res.format({
          html: function(){
              var titles = []
              for(var i = 0; i < 20; i ++ ) {
                titles.push(body.results[0].results[i].title)
              }
            res.render('index', {
              "NewsHeadlines": titles
            });
          },
        });


      });
    })

    module.exports = router;
