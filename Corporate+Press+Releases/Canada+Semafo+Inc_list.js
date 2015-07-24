//http://www.semafo.com/English/news-and-media/news-releases/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.semafo.com/English/news-and-media/news-releases/default.aspx"], function () {
    var urls = [];
    $(".news .ModuleItemRow a.newsTitle").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});