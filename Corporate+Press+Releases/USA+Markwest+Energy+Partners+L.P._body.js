// Markwest Energy Partners L.P.
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investor.markwest.com/phoenix.zhtml?c=135034&p=irol-newsArticle&ID=2069328",
    function () {
        var ps = jQuery(".ccbnBgTxt")[0].innerText.split("--");
        if(ps.length > 2) {
            ps = ps[2].replace(/\./g,'');
        } else {
            ps = cs.scanForDate(jQuery(".ccbnBgTxt")[0].innerText.trim(), "MMMM dd, yyyy")
        }
        return {
            title: jQuery(".ccbnBgTtl")[0].innerText.trim(),
            published_s: ps,
            body: jQuery(".ccbnBgTxt")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);