// Whiting Petroleum Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=147759&p=irol-newsArticle&ID=2072331",
    function () {
        var b = jQuery("#investor .ccbnTxt")[0].innerText.trim();
        return {
            title: jQuery("#investor .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b.replace(/\./g, ''), "MMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);