// W&T Offshore Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.wtoffshore.com/phoenix.zhtml?c=179783&p=irol-newsArticle&ID=2068484",
    function () {
        var b = $("#irMain .ccbnTxt")[0].innerText.trim();
        return {
            title: $("#irMain .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);