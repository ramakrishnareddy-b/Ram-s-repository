/* Moving from -> Corporate Press Releases/Netherlands Van Oord_list.js */ 
//http://www.vanoord.com/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.vanoord.com/news"], function () {
    var urls = [];
    jQuery(".news-overview .content .title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});