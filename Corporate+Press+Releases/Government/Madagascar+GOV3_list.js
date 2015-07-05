//http://eiti-madagascar.org/all-news/actualites/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://eiti-madagascar.org/all-news/actualites/"], function () {
    var urls = [];
    jQuery(".content .archive h4 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});