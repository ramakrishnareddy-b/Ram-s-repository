// Newfield Exploration Co
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=63798&p=irol-newsArchiveArticle&ID=2071885",
    function () {
        var b = $("#rigthColWideWrapper .xn-content")[0].innerText.trim();
        return {
            title: $("#rigthColWideWrapper .ccbnBgTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);