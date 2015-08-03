// Venoco Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investor.venocoinc.com/phoenix.zhtml?c=193733&p=irol-newsArticle&ID=2068632",
    function () {
        var b = $(".ccbnContent .ccbnBgTxt")[0].innerText.trim();
        return {
            title: $(".ccbnContent .ccbnBgTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);