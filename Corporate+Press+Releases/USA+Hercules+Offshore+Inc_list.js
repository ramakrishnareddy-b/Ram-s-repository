//http://ir.herculesoffshore.com/phoenix.zhtml?c=192573&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.herculesoffshore.com/phoenix.zhtml?c=192573&p=irol-news&nyo=0"], function () {
    var urls = [];
    jQuery(".ccbnOutline .ccbnTblLnk[target='_blank']").remove();
    jQuery(".ccbnOutline .ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});