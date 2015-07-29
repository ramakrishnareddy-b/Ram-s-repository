// Targa Resources Partners LP
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.targaresources.com/trc/releasedetail.cfm?ReleaseID=923746",
    function () {
        var t = $(".pubcontentarea .pubsubcontentparenttitle h2")[0].innerText.trim();
        var b = $(".pubcontentarea .StandardCBStyle")[0].innerText.trim();
        var ps = cs.scanForDate(b, "MMMM dd, yyyy");
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);
