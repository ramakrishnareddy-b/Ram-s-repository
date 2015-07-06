//http://mnr.krg.org/index.php/en/media-center/press-release
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mnr.krg.org/index.php/en/media-center/press-release"], function () {
    var urls = [];
    jQuery(".category-list .category-item .readmore a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});