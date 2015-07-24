//http://www.magellanlp.com/news.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.magellanlp.com/news.aspx"], function () {
    var urls = [];
    $("#ctl00_ContentPlaceHolder1_newsListSummary  a.MMPLink").each(function (idx, el) {
        if(el.href.indexOf(".pdf") == -1) {
            urls.push(el.href);
        }
    });
    return urls;
});