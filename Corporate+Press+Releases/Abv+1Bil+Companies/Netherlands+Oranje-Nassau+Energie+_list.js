/* Moving from -> Corporate Press Releases/Netherlands Oranje-Nassau Energie _list.js */ 
//http://www.onebv.com/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.onebv.com/news"], function () {
    var urls = [];
    jQuery('.newslist h2 a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});