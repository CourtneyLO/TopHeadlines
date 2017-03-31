function NewsHeadlines() {

}

  NewsHeadlines.prototype.getNewsHeadlines = function(displayNews) {
    var http = new XMLHttpRequest();
    var url = "http://api.ft.com/content/search/v1?apiKey=ercgrchspx5ku37xnzngy5qq";
    var params = JSON.stringify({ queryString: 'rose',
  resultContext: { aspects: [ 'title', 'lifecycle', 'location', 'summary', 'editorial' ] } });
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
          this.text = JSON.parse(http.responseText)
          console.log(this.text.results[0].results[0].title.title)
          displayNews(this.text);
        }
    }
    http.send(params);
  }
