//http://ir.energytransfer.com/phoenix.zhtml?c=106094&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.energytransfer.com/phoenix.zhtml?c=106094&p=irol-news&nyo=0"], function () {
    var urls = [];
    $(".ccbnOutline a[target='_blank']").remove();
    $(".ccbnOutline a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});