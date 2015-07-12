//http://www.opm.gov.tt/media_centre.php?mid=5
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.opm.gov.tt/media_centre.php?mid=5"], function () {
    var urls = [];
    $(".page_num .news_item .news_title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});