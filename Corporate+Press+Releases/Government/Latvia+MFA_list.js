//http://www.mfa.gov.lv/en/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mfa.gov.lv/en/news"], function () {
    var urls = [];
    jQuery(".modNews .modNewsItem .infoblock a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});