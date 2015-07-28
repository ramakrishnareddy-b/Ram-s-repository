/* Moving from -> Corporate Press Releases/USA Chart Industries Inc_list.js */ 
//http://www.chartindustries.com/News-Events/News
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.chartindustries.com/News-Events/News"], function () {
    var urls = [];
    $(".news-items a.title").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});