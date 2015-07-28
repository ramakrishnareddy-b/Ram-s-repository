/* Moving from -> Corporate Press Releases/Netherlands Mammoet _list.js */ 
//http://www.mammoet.com/en/News/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.mammoet.com/en/News/"], function () {
    var urls = [];
    $(".project-list a.news-item-link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});