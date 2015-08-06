//http://www.cjenergy.com/news-events/press-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cjenergy.com/news-events/press-releases"], function () {
    var urls = [];
    $(".days h3 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});