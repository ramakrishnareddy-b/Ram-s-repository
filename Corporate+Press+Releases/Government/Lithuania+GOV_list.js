//https://www.urm.lt/default/en/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.urm.lt/default/en/news"], function () {
    var urls = [];
    $("#news_list .site_1 a.link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});