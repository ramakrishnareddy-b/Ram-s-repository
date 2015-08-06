//http://www.modec.com/news/press/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.modec.com/news/press/index.html"], function () {
    var urls = [];
    $(".news03 a.note").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});