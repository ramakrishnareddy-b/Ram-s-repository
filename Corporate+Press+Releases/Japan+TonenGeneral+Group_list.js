//http://www.tonengeneral.co.jp/english/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.tonengeneral.co.jp/english/news/"], function () {
    var urls = [];
    $(".list-timeline-01 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});