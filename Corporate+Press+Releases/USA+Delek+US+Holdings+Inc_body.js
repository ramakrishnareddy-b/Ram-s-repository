// Delek US Holdings Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=196835&p=irol-newsArticle&ID=2075172",
    function () {
        var b = $(".node-inner .ccbnTxt")[0].innerText.trim();
        return {
            title: $(".node-inner .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);