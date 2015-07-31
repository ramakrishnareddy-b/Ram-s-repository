//http://investors.sandridgeenergy.com/investor-relations/press-releases/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investors.sandridgeenergy.com/investor-relations/press-releases/default.aspx"], function () {
    var urls = [];
    $(".newsWidget .newsList .LinkTo a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});