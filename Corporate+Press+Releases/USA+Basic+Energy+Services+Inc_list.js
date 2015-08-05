//http://ir.basicenergyservices.com/phoenix.zhtml?c=130445&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.basicenergyservices.com/phoenix.zhtml?c=130445&p=irol-news&nyo=0"], function () {
    var urls = [];
    jQuery("tr.ccbnOutline a.ccbnTblLnk[target='_blank']").remove();
    jQuery("tr.ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});