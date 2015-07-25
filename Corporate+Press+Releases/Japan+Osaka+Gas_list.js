//http://www.osakagas.co.jp/en/ir/news/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.osakagas.co.jp/en/ir/news/index.html"], function () {
    var urls = [];
    $("#contents .update-list02 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});