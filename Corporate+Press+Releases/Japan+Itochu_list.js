//http://www.itochuoil.co.jp/e/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.itochuoil.co.jp/e/news/"], function () {
    var urls = [];
    $(".inr-pc .news a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});