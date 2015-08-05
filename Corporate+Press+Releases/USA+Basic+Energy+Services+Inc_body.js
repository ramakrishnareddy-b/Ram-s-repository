// Basic Energy Services Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.basicenergyservices.com/phoenix.zhtml?c=130445&p=irol-newsArticle&ID=2073359",
    function () {
        var b = jQuery(".item-page .ccbnTxt")[0].innerText.trim();
        return {
            title: jQuery(".item-page .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);