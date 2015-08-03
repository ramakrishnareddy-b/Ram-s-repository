// Bonanza Creek Energy Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.bonanzacrk.com/phoenix.zhtml?c=246947&p=irol-newsArticle&ID=2071432",
    function () {
        var b = jQuery(".ccbn-tab-content-active .ccbnTxt, .entry-content .ccbnBgTxt")[0].innerText.trim();
        return {
            title: jQuery(".ccbn-tab-content-active h3, .entry-content .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);