//http://www.petroleum.go.ug/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.petroleum.go.ug/news"], function () {
    var urls = [];
    jQuery(".main-content .article-container h3 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});