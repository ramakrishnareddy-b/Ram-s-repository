// Sherritt International Corporation
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.sherritt.com/press-releases/sherritt-announces-ambatovy-june-monthly-production-update-and-receipt-of-enviro-tsx-s-11g047042-001",
    function(){
        var b = jQuery(".ReleaseBody .mw_release")[0].innerText.trim();
        return {
            title: jQuery(".ReleaseBody h1")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);