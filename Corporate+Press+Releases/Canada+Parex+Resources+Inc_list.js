//http://www.parexresources.com/media/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.parexresources.com/media/news/"], function () {
    var urls = [];
    $(".content .media-body a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});