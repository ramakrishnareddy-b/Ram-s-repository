// Transglobe Energy Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.trans-globe.com/news/release?id=1960803",
    function () {
        var b = $(".news_article .mw_release")[0].innerText.trim();
        return {
            title: $(".news_article h3")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);