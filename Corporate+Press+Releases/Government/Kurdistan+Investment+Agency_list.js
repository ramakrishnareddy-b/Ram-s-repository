//http://kurdistaninvestment.org/news.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://kurdistaninvestment.org/news.html"], function () {
    var urls = [];
    $(".article .teaser .spec a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});