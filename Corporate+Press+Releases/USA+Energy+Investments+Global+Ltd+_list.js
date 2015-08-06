//http://www.eigpartners.com/news/press-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.eigpartners.com/news/press-releases"], function () {
    var urls = [];
    $(".view-content h4 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});