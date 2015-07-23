//http://www.petrofac.com/media/news.aspx?Section=PRESS%20RELEASES
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.petrofac.com/media/news.aspx?Section=PRESS%20RELEASES"], function () {
    var urls = [];
    $("article h1 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});