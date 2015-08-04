// Whitecap Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.wcap.ca/news-category/18-2015/154-whitecap-resources-inc-confirms-monthly-dividend-for-july-of-0-0625-per-share.html",
    function () {
        var t = jQuery(".item-page .title")[0].innerText.trim();
        jQuery(".item-page .title").remove();
        var b = jQuery(".item-page")[0].innerText.trim();
        var ps = cs.scanForDate(b, "MMMM dd, yyyy");
        b.replace(ps, "");
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);