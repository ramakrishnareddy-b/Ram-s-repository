//http://mae.gov.mg/category/actualites/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mae.gov.mg/category/actualites/"], function () {
    var urls = [];
    jQuery(".thumbnail.mae-see-also .post-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});