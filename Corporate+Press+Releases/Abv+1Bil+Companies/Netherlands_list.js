/* Moving from -> Corporate Press Releases/Netherlands_list.js */ 
//http://www.hertel.com/news.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.hertel.com/news.html"], function () {
    var urls = [];
    jQuery(".content a.overlay").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});