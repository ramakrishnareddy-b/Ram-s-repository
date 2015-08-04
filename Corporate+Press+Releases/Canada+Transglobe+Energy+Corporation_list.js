//http://www.trans-globe.com/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.trans-globe.com/news/"], function () {
    var urls = [];
    $("div.main h3 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});