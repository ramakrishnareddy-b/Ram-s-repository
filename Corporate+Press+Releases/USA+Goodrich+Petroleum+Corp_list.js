//http://goodrichpetroleum.investorroom.com/news-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://goodrichpetroleum.investorroom.com/news-releases"], function () {
    var urls = [];
    $(".spintable .item_name a.itemlink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});