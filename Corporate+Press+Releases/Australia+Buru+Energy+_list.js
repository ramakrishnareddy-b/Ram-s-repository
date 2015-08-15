//http://www.buruenergy.com/news/media-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.buruenergy.com/news/media-releases/"], function () {
    var urls = [];
    jQuery(".prettyListItems a").each(function (idx, el) {
        // date is not available for this website.
        var obj = {link: el.href, title: jQuery(el).text().trim(), published_s: "", content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});