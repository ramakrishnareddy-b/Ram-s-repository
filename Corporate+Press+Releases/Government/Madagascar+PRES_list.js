//http://www.presidence.gov.mg/category/documents/communiques/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.presidence.gov.mg/category/documents/communiques/"], function () {
    var urls = [];
    jQuery("#content .entry-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});