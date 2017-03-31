window.onload = function() {
  console.log("Page has loaded")

    var searchHeadlines = new SearchHeadlines()
    var displaySearchHeadline = new DisplaySearchHeadline()
    searchHeadlines.getHeadlines(displaySearchHeadline.newsHeadlines.bind(searchHeadlines))
  };
