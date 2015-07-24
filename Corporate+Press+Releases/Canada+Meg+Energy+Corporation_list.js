//http://www.megenergy.com/news-room/latest-news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.megenergy.com/news-room/latest-news"], function () {
    var urls = [];
    $(".view-content .news-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});