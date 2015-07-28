/* Moving from -> Corporate Press Releases/USA Gulfport Energy Corporation_list.js */ 
//http://www.gulfportenergy.com/news/press-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.gulfportenergy.com/news/press-releases"], function () {
    var urls = [];
    $(".main-content .media a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});