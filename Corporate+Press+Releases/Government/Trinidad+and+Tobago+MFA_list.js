//http://www.foreign.gov.tt/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.foreign.gov.tt/news/"], function () {
    var urls = [];
    $("ul.news-list > li .news-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});