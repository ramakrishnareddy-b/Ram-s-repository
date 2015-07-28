/* Moving from -> Corporate Press Releases/Canada Baytex Energy Corporation_list.js */ 
//http://www.baytexenergy.com/newsmedia/news-releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.baytexenergy.com/newsmedia/news-releases.cfm"], function () {
    var urls = [];
    $(".ui-widget .ui-tabs-hide").remove();
    $(".ui-widget .ui-widget-content a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});