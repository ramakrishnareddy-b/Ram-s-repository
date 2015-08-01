//http://www.statoil.com/en/newsandmedia/pages/default.aspx
// changed the url from  http://www.statoil.com/en/newsandmedia/pages/default.aspx to http://www.statoil.com/en/NewsAndMedia/News/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.statoil.com/en/NewsAndMedia/News/Pages/default.aspx"], function () {
    var urls = [];
    $(".searchResult li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});