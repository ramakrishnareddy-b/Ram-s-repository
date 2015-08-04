//http://www.wcap.ca/news.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.wcap.ca/news.html"], function () {
    var urls = [];
    jQuery(".slides-container .slides li[style='top: 0px; left: 0px; position: absolute; display: none; width: 920px; height: 1170px;']").remove();
    jQuery(".slides-container .lnd_latestnews.piet a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});