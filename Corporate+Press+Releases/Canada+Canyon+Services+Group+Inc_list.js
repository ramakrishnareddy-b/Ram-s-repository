//http://www.canyontech.ca/newsroom/news_category/releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.canyontech.ca/newsroom/news_category/releases/"], function () {
    var urls = [];
    $(".news-grid a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});