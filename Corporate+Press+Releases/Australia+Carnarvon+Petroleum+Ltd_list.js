var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://carnarvon.com.au/?page_id=123"], function () {
    var urls = [];
    jQuery(".single-publication").each(function (idx, el) {
        var published_dt = cs.scanForDate(jQuery(el).find(".date"), "MMMM dd, yyyy");
        var link=jQuery(el).find("a")[0];
        var obj = {link: link.href, title: link.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});

