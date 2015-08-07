//http://www.newpark.com/interests/investors/information-and-reports/news-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.newpark.com/interests/investors/information-and-reports/news-releases"], function () {
    var urls = [];
    jQuery(".newsTables .newsTable[style='display:none;']").remove();
    jQuery(".newsTables .newsTable[style='display:block;'] .cellTitle a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});