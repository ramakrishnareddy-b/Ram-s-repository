//http://www.canadianenergyservices.com/newsreleases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.canadianenergyservices.com/newsreleases"], function () {
    var urls = [];
    $(".news-group10 a.download-btn").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});