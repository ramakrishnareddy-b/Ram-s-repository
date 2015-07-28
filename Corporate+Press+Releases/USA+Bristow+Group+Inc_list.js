//http://bristowgroup.com/bristow-news/latest-news/press-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://bristowgroup.com/bristow-news/latest-news/press-releases/"], function () {
    var urls = [];
    $("div.articles h1 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});