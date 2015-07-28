/* Moving from -> Corporate Press Releases/USA Sabine Oil & Gas Corporation_list.js */ 
// Sabine Oil & Gas Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investors.sabineoil.com/phoenix.zhtml?c=92251&p=irol-newsArticle&ID=2067801",
    function () {
        var b = $(".internalpage .xn-content")[0].innerText.trim();
        return {
            title: $(".internalpage .ccbnTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);