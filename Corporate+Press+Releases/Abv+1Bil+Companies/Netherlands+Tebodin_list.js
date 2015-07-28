/* Moving from -> Corporate Press Releases/Netherlands Tebodin_list.js */ 
//http://www.tebodin.bilfinger.com/news/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.tebodin.bilfinger.com/news/news/"], function () {
    var urls = [];
    $(".news-list-container .news-list-item-inner h4 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});