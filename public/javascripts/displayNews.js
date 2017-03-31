function DisplayNewsHeadlines() {

}

DisplayNewsHeadlines.prototype.newsHeadlines = function(news) {
  var headline = document.getElementById("headline")
  for (var i = 0; i < 20 ; i ++) {
    var number = i + 1
    headline.innerHTML += '<li>' + news.results[0].results[i].title.title + '</li></br>'
  }
}
