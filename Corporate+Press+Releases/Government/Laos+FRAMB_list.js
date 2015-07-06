//http://www.ambafrance-laos.org/-Actualite-de-l-ambassade,294-

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ambafrance-laos.org/-Actualite-de-l-ambassade,294-"], function () {
    var urls = [];
    $(".block-listing-articles h2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});