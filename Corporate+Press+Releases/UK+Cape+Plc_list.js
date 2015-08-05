//http://www.capeplc.com/news-and-media/news-announcements.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.capeplc.com/news-and-media/news-announcements.aspx"], function () {
    var urls = [];
    $(".news_announce .announce a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});