//http://www.ina.hr/default.aspx?id=350
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ina.hr/default.aspx?id=350"], function () {
    var urls = [];
    $(".pageBody table a[target='_blank']").remove();
    $(".pageBody table a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});