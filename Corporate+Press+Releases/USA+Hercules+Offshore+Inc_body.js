// Hercules Offshore Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.herculesoffshore.com/phoenix.zhtml?c=192573&p=irol-newsArticle&ID=2070332",
    function () {
        var b = jQuery(".ccbnContent .xn-content")[0].innerText.trim();
        return {
            title: jQuery(".ccbnContent .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);