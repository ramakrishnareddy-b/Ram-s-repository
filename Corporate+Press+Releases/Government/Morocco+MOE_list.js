//http://www.onhym.com/en/news-feed.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.onhym.com/en/news-feed.html"], function () {
    var urls = [];
    jQuery(".blog .art-postcontent .readmore a, .blog .art-postcontent  ol > li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});