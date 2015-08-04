//http://www.kingdream.com/yw/news.asp
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kingdream.com/yw/news.asp"], function () {
    var urls = [];
    $("td[height='400'] a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});