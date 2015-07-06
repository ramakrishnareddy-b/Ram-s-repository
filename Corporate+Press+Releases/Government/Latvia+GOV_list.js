//http://www.mk.gov.lv/en/aktualitates
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mk.gov.lv/en/aktualitates"], function () {
    var urls = [];
    jQuery(".content .view-content .views-field-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});