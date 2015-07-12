// Uganda
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.oilinuganda.org/features/companies/bunyoro-leaders-demand-for-more.html",
    function () {
        var t = $("article h2")[0].innerText;
        var ps = $("article .post_date")[0].innerText.split(" | ")[0];
        $("article h2, article .articleHeader, article .wp-caption").remove();
        return {
            title: t,
            published_s: ps,
            body: $("article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);