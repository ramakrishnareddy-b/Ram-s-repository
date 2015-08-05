// Parex Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.parexresources.com/media/news/?r_id=1973854&pageno=1&nyear=2015",
    function () {
        var b = $(".content .mw_release")[0].innerText.trim();
        return {
            title: $(".content h1.spacing0")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);