// Targa Resources Corp
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.targaresources.com/trc/releasedetail.cfm?ReleaseID=923746",
    function () {
        var b = $(".pubcontentarea #ndq-content")[0].innerText.trim();
        return {
            title: $(".pubcontentarea h2")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);