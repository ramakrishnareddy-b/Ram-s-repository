//http://phx.corporate-ir.net/phoenix.zhtml?c=63798&p=irol-newsarchive&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://phx.corporate-ir.net/phoenix.zhtml?c=63798&p=irol-newsarchive&nyo=0"], function () {
    var urls = [];
    $(".ccbnOutline a[target='_blank']").remove();
    $(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});