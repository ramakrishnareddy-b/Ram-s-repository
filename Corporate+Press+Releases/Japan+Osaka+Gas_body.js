// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.osakagas.co.jp/en/whatsnew/1223172_11885.html",
    function () {
        var t = $(".oneColumn01 .ttlBox")[0].innerText.trim();
        var ps = $(".oneColumn01 .day")[0].innerText.trim().replace(/\./g, ',');
        $(".oneColumn01 .ttlBox, .oneColumn01 .day, .oneColumn01 img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".oneColumn01")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);