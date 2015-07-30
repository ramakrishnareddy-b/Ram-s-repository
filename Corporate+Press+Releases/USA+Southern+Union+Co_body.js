// Southern Union Co
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.energytransfer.com/phoenix.zhtml?c=106094&p=irol-newsArticle&ID=2071140",
    function () {
        var b = $("#ccbnContent .ccbnTxt")[0].innerText.trim();
        return {
            title: $("#ccbnContent .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b.replace(/\./g, ''), "MMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);