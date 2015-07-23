// Cabot Oil & Gas Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=116492&p=irol-newsArticle&ID=2070091",
    function () {
        return {
            title: jQuery(".blogpost .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(jQuery(".blogpost .xn-content")[0].innerText.trim(), "MMMM dd, yyyy"),
            body: jQuery(".blogpost .xn-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);