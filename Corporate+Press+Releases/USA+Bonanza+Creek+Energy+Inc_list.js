//http://ir.bonanzacrk.com/phoenix.zhtml?c=246947&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.bonanzacrk.com/phoenix.zhtml?c=246947&p=irol-news&nyo=0"], function () {
    var urls = [];
    jQuery(".entry-content .ccbnTblLnk[target='_blank']").remove();
    jQuery(".entry-content .ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});