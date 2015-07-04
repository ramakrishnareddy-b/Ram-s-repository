//http://www.mireme.gov.mz
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mireme.gov.mz"], function () {
    var urls = [];
    jQuery(".component-content .items-row .item h2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});