// Schlumberger
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.slb.com/news/press_releases/2015/2015_0716_q2_earnings.aspx",
    function () {
        var t = jQuery("#content_0__divCenter h1")[0].innerText.trim();
        jQuery("#content_0__divCenter h1").remove();
        return {
            title: t,
            body: jQuery("#content_0__divCenter")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);