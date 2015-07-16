//http://www.kgoc.com/Pages/NewsListing.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kgoc.com/Pages/NewsListing.aspx"], function () {
    var urls = [];
    $(".cbq-layout-main > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});