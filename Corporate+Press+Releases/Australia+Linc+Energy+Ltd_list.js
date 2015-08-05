//http://lincenergy.listedcompany.com/newsroom.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://lincenergy.listedcompany.com/newsroom.html"], function () {
    var urls = [];
    $(".ir_news .ir_newsTitle a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});