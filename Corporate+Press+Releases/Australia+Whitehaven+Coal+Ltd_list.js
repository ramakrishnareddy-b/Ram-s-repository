//http://www.whitehavennews.com.au/category/asx-announcements/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.whitehavennews.com.au/category/asx-announcements/"], function () {
    var urls = [];
    jQuery("#content .blog-item h2.entry-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});