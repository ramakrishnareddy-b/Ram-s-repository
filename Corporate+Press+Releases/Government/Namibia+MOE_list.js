//http://www.mme.gov.na/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mme.gov.na/news/"], function () {
    var urls = [];
    jQuery(".storybox .bluetext .small2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});