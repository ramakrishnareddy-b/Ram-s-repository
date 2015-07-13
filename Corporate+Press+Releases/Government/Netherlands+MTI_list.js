//https://www.tno.nl/en/about-tno/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.tno.nl/en/about-tno/news/"], function () {
    var urls = [];
    $(".list__block > .list__block--item > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});