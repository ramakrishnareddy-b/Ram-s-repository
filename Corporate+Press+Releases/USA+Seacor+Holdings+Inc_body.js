// Seacor Holdings Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.stockpr.com/seacorholdings/company-news/detail/1206/seacor-holdings-announces-results-for-its-second-quarter-ended-june-30-2015",
    function () {
        return {
            title: $(".spr-ir-module-container .spr-ir-news-article-title")[0].innerText.trim(),
            published_s: cs.scanForDate($(".spr-ir-module-container .spr-ir-news-article-date")[0].innerText.trim(), "MMMM dd, yyyy"),
            body: $(".spr-ir-module-container .spr-ir-news-article-content")[0].innerText.trim(),
            links: $(".spr-ir-module-container .spr-ir-news-article-pdf-link a").attr("href"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);