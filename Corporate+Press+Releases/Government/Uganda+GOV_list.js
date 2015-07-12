//http://mediacentre.go.ug/media-releases%20
//http://mediacentre.go.ug/news-updates%20
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mediacentre.go.ug/media-releases%20", "http://mediacentre.go.ug/news-updates%20"], function () {
    var urls = [];
    jQuery("#block-system-main ul > li.views-row h2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});