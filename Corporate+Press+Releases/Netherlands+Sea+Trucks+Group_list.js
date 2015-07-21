//http://www.seatrucksgroup.com/media-center/press-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.seatrucksgroup.com/media-center/press-releases"], function () {
    var urls = [];
    jQuery(".cbs-List .mediacenter-article-content a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});