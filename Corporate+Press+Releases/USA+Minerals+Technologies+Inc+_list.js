//http://investors.mineralstech.com/phoenix.zhtml?c=82665&p=irol-reportsannual
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investors.mineralstech.com/phoenix.zhtml?c=82665&p=irol-reportsannual"], function () {
    var urls = [];
    $(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});
