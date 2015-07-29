//http://ir.qepres.com/investors/news-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.qepres.com/investors/news-releases/"], function () {
    var urls = [];
    $(".ModuleContainerInner .ModuleItemRow a.ModuleHeadlineLink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});