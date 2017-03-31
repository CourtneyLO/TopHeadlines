window.onload = function() {

    var allNewsHeadlines = new AllNewsHeadlines();
    var displayNewsHeadlines = new DisplayNewsHeadlines()
    allNewsHeadlines.getAllNewsHeadlines(displayNewsHeadlines.newsHeadlines.bind(allNewsHeadlines))
}
