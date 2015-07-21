//http://www.workfox.com/en/news/Press-releases/e/ms/34/pm/10/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.workfox.com/en/news/Press-releases/e/ms/34/pm/10/"], function () {
    var urls = [];
    $(".contentAll .newsItem a.btn").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});