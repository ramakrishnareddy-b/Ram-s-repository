//http://www.energy.gov.tt/media-gallery/media-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.energy.gov.tt/media-gallery/media-releases/"], function () {
    var urls = [];
    $(".news_con .item a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});