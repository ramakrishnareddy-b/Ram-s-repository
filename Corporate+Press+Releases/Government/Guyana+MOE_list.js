//http://nre.gov.gy/bulletin.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://nre.gov.gy/bulletin.html"], function () {
    var urls = [];
    $("#mainContent a:contains('read more')").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});