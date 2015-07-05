//http://www.ambafrance-mada.org/-Toutes-les-actualites-
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ambafrance-mada.org/-Toutes-les-actualites-"], function () {
    var urls = [];
    $(".block-page .block-listing-articles .title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});