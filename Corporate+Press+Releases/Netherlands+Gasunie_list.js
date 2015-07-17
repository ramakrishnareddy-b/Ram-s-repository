//http://www.gasunie.nl/en/news/gasunie-kondigt-oprichting-gasunie-grid-services-ggs-aan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.gasunie.nl/en/news/gasunie-kondigt-oprichting-gasunie-grid-services-ggs-aan"], function () {
    var urls = [];
    jQuery(".nieuwsoverzicht > li > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});