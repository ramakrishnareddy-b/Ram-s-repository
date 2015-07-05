//http://www.ambafrance-ma.org/-Actualites-politiques-
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ambafrance-ma.org/-Actualites-politiques-"], function () {
    var urls = [];
    $(".block-listing .inner ul>li h2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});