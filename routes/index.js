var express = require('express');
var router = express.Router();
var request = require("request");


router.route('/')
.get(function(req, res, next) {
  request({
    uri: 'http://api.ft.com/content/search/v1?apiKey=ercgrchspx5ku37xnzngy5qq',
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
            if(body.results[0].indexCount > 0){
              var myArray = []
              for(var i = 0; i < body.results[0].results.length; i ++ ) {
                myArray.push(body.results[0].results[i].title)
              }
            } else {
              myArray = [{title: "There are no articles on " + mySearch.search + ". Please search again"}]
            }
            res.render('index', {
              "NewsHeadlines": myArray
            });
          },
        });


      });
    })

    module.exports = router;
