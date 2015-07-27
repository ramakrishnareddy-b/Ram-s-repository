//http://www.centamin.com/centamin/media/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.centamin.com/centamin/media/news"], function () {
    var urls = [];
    $(".item-show a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});