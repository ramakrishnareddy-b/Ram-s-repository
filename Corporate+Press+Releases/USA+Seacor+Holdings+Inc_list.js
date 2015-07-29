//http://ir.stockpr.com/seacorholdings/company-news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.stockpr.com/seacorholdings/company-news"], function () {
    var urls = [];
    $(".spr-ir-news .rss-item a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});