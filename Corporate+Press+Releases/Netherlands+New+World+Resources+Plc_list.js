//http://www.newworldresources.eu/en/media/press-releases/2015
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.newworldresources.eu/en/media/press-releases/2015"], function () {
    var urls = [];
    $(".news-list .news-list-item a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});