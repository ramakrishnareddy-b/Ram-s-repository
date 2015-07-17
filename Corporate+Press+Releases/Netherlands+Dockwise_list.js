//http://www.dockwise.com/page/news-2014.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.dockwise.com/page/news-2014.html"], function () {
    var urls = [];
    $(".dataobject .navigation-readmore a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});