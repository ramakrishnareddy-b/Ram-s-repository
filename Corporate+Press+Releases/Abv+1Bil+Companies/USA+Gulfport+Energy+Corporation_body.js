/* Moving from -> Corporate Press Releases/USA Gulfport Energy Corporation_list.js */ 
// Gulfport Energy Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.gulfportenergy.com/news/press-releases/detail/1275/gulfport-energy-corporation-announces-pricing-of-its-common",
    function () {
        var t = $(".main-content h1")[0].innerText.trim();
        var ps = $(".main-content .date")[0].innerText.trim();
        var l = $(".main-content .related-documents-line a").attr("href");
        $(".main-content h1, .main-content .related-documents-line, .main-content pre").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".main-content article")[0].innerText.trim(),
            link: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);