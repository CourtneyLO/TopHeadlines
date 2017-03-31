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
          "aspects" :[  "title","lifecycle","location","summary","editorial" ]}
        }

      }, function (error, response, body) {
        console.log(body.results[0].results[0].summary.excerpt)
        res.format({
          html: function(){
            console.log(body.results[0].results[0].title)
            if(body.results[0].indexCount > 1){
              var titles = []
              for(var i = 0; i < 20; i ++ ) {
                titles.push(body.results[0].results[i].title)
              }
            } else if( body.results[0].indexCount === 1){
              titles = [{title: body.results[0].results[0].title.title}]
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
