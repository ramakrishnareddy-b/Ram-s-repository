//http://www.buckeye.com/InvestorCenter/NewsReleases/tabid/83/Default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.buckeye.com/InvestorCenter/NewsReleases/tabid/83/Default.aspx"], function () {
    var urls = [];
    $(".tablestyle .rowstyle a, .tablestyle .altrowstyle a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});