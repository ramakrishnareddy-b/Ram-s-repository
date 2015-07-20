/* Moving from -> Corporate Press Releases/Netherlands Akzo Nobel_list.js */ 
//https://www.akzonobel.com/news_center/news/news_and_press_releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.akzonobel.com/news_center/news/news_and_press_releases/"], function () {
    var urls = [];
    $(".list_results .more a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});