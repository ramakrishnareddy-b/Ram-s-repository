// Niska Gas Storage Partners LLC
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investor.niskapartners.com/phoenix.zhtml?c=235313&p=irol-newsArticle&ID=2059007",
    function () {
        var b = $("#thomson .ccbnTxt, .ccbn-tab-content-active .ccbnTxt")[0].innerText.trim();
        return {
            title: $("#thomson .ccbnTtl, .ccbn-tab-content-active h3")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);