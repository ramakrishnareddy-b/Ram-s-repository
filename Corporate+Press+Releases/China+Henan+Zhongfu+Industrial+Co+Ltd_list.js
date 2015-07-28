//http://www.zfmetals.com/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.zfmetals.com/news/"], function () {
    var urls = [];
    $(".media-list .media .color_news a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});