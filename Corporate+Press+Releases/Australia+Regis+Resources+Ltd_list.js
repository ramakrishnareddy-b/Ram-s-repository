//http://www.regisresources.com.au/reports-2/asx-announcements
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.regisresources.com.au/reports-2/asx-announcements"], function () {
    var urls = [];
    jQuery(".pd-category a.btn-success").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});