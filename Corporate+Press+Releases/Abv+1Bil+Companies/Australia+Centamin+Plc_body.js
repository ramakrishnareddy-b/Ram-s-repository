/* Moving from -> Corporate Press Releases/Australia Centamin Plc_list.js */ 
// Centamin Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.centamin.com/centamin/media/news/q2-2015-preliminary-production-results",
    function () {
        var t = $(".article h1")[0].innerText.trim();
        var ps = $(".article p:first")[0].innerText.trim();
        var urls = [];
        $(".article .icon_pdf a").each(function (idx, el) {
            urls.push(el.href);
        })
        $(".article h1, .article .group, .article p:first, .article .icon_pdf").remove();
        return {
            title: t,
            published_s: ps,
            body: cs.textUpto($(".article")[0].innerText,"Please click"),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);