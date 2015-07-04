//http://www.mofa.gov.mm/?tag=press-release
//http://www.mofa.gov.mm/?cat=4
//http://www.mofa.gov.mm/?cat=1

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mofa.gov.mm/?tag=press-release", "http://www.mofa.gov.mm/?cat=4", "http://www.mofa.gov.mm/?cat=1"], function () {
    var urls = [];
    jQuery("#column .post-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});