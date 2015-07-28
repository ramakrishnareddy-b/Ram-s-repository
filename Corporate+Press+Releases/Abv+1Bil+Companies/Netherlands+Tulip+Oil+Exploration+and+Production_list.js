/* Moving from -> Corporate Press Releases/Netherlands Tulip Oil Exploration and Production_list.js */ 
//http://tulipoil.com/category/news/?lang=en
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://tulipoil.com/category/news/?lang=en"], function () {
    var urls = [];
    jQuery(".inner-content .blog-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});