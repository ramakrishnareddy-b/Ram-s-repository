//http://enlk.enlink.com/investor/investor-news/default.aspx?
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://enlk.enlink.com/investor/investor-news/default.aspx?"], function () {
    var urls = [];
    $(".ModuleContainerInner a.ModuleHeadlineLink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});