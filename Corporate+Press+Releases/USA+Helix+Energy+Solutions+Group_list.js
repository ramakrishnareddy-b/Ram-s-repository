//http://phx.corporate-ir.net/phoenix.zhtml?c=94139&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://phx.corporate-ir.net/phoenix.zhtml?c=94139&p=irol-news&nyo=0"], function () {
    var urls = [];
    $(".entry-content a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});