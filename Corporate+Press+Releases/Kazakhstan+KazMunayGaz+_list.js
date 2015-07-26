//http://www.azskmg.kz/cat/press
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.azskmg.kz/cat/press"], function () {
    var urls = [];
    $(".newsl .news-preview a.readmore").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});