//http://www.total.ga/fr/liste-actualites
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.total.ga/fr/liste-actualites"], function () {
    var urls = [];
    jQuery(".list-results a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});