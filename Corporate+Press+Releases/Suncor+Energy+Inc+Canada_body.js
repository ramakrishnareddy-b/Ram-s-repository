// Suncor Energy Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.suncor.com/en/newsroom/5441.aspx?id=1967229",
    function () {
        return {
            title: $(".title")[0].innerText.trim(),
            published_s: cs.scanForDate($(".rightColPageData p strong")[0].innerText.trim(), "MMMM dd, yyyy"),
            body: $(".rightColPageData")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);