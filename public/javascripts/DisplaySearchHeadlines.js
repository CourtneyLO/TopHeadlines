function DisplaySearchHeadline() {
  console.log("in DisplaySearchHeadline")
}
  DisplaySearchHeadline.prototype.newsHeadlines = function(text){
  var headline = document.getElementById("search_headline")
  for (var i = 0; i < 20; i ++) {
    var number = i + 1
    headline.innerHTML += '<li>' + text.results[i].title.title + '</li>'
  }
}
