//http://www.portaldogoverno.gov.mz/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.portaldogoverno.gov.mz/news"], function () {
    var urls = [];
    $('.tileItem h2 a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});