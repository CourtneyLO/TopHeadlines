function AllNewsHeadlines() {

}

  AllNewsHeadlines.prototype.getAllNewsHeadlines = function(displayNewsHeadlines) {
    var http = new XMLHttpRequest();
    var url = "http://api.ft.com/content/search/v1?apiKey=ercgrchspx5ku37xnzngy5qq";
    var params = JSON.stringify({ queryString: 'rose',
  resultContext: { aspects: [ 'title', 'lifecycle', 'location', 'summary', 'editorial' ] } });
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
          this.text = JSON.parse(http.responseText)
          displayNewsHeadlines(this.text);
        }
    }
    http.send(params);
  }
