// Boardwalk Pipeline Partners
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=193443&p=irol-newsArticle&ID=2064125",
    function () {
        jQuery(".Content .xn-content img").remove();
        return {
            title: jQuery(".Content .ccbnBgTtl")[0].innerText.trim(),
            published_s: cs.scanForDate(jQuery(".Content .xn-content")[0].innerText.trim(), "MMMM dd, yyyy"),
            body: jQuery(".Content .xn-content")[0].innerText.trim(),
            link: jQuery(".Content .ccbnBgTxt a").attr("href"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);