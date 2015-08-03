//http://investor.venocoinc.com/phoenix.zhtml?c=193733&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investor.venocoinc.com/phoenix.zhtml?c=193733&p=irol-news&nyo=0"], function () {
    var urls = [];
    $(".ccbnOutline .ccbnTblLnk[target='_blank']").remove();
    $(".ccbnOutline .ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});