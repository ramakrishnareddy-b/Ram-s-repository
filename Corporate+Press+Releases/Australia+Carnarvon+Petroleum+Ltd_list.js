//http://carnarvon.com.au/?page_id=123
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://carnarvon.com.au/?page_id=123"], function () {
    var urls = [];
    jQuery(".publication-archive .descrition a").each(function (idx, el) {
        var published_dt = cs.scanForDate(jQuery(el).parent().parent().parent().text().trim(), "MMMM dd, yyyy");
        var obj = {link: el.href, title: jQuery(el).text().trim(), published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});