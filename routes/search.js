var express = require('express');
var router = express.Router();
var request = require("request");

router.route('/')
.post(function(req, res, next) {
  mySearch = {
    search:req.body.q,
  };

  request({
    uri: 'http://api.ft.com/content/search/v1?apiKey=' + process.env.API_KEY,
    json: true,
    method: 'POST',
    body: {
      "queryString": mySearch.search,
      "queryContext" : {
        "curations" : [ "ARTICLES"]},
        "resultContext" : {
		        "aspects" :[  "title","lifecycle","location","summary","editorial" ],
	           "maxResults" : "20"
	          }
        }

      }, function (error, response, body) {
        res.format({
          html: function(){
            if(body.results[0].indexCount > 0){
              var titles = []
              for(var i = 0; i < body.results[0].results.length; i ++ ) {
                titles.push(body.results[0].results[i].title)
              }
            } else {
              titles = [{title: "There are no articles on " + mySearch.search + ". Please search again"}]
            }
            res.render('index', {
              "NewsHeadlines": titles
            });
          },
        });

      });
    })

    module.exports = router;
