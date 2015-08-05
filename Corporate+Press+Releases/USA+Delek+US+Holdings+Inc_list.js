//http://phx.corporate-ir.net/phoenix.zhtml?c=196835&p=irol-news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://phx.corporate-ir.net/phoenix.zhtml?c=196835&p=irol-news"], function () {
    var urls = [];
    $(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});