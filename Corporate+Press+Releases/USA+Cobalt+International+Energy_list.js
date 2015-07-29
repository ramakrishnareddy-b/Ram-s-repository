//http://www.cobaltintl.com/newsroom#press_releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cobaltintl.com/newsroom#press_releases"], function () {
    var urls = [];
    $(".entry-listing-collection[data-target-prefix='press_releases_'] .entry-listing-sub-group.is-active .entry-listing-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});