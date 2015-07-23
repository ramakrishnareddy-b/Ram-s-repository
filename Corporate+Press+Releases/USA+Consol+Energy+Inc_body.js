// Consol Energy Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=66439&p=irol-newsArticle&ID=2068945",
    function () {
        return {
            title: jQuery(".ccbnContent .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(jQuery(".ccbnContent .prfix")[0].innerText.trim(), "MMMM dd, yyyy"),
            body: jQuery(".ccbnContent .prfix")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);