/* Moving from -> Corporate Press Releases/USA Kinder Morgan Energy Partners L.P_list.js */ 
//http://news.kindermorgan.com/press-releases/all/all/All
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://news.kindermorgan.com/press-releases/all/all/All"], function () {
    var urls = [];
    $(".item-list .views-field-title .field-content a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});