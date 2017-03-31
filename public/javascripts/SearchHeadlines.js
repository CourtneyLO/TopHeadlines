function SearchHeadlines() {

}

SearchHeadlines.prototype.getHeadlines = function() {
  var http = new XMLHttpRequest();
  var url = "http://localhost:3000/search";
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText)
        this.text = JSON.parse(http.responseText)
        console.log(this.text.results[0].title.title)
      }
  }
  http.send();
}
