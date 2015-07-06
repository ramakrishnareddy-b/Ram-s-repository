// Kurdistan

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mnr.krg.org/index.php/en/press-releases/464-krg-response-to-statement-by-dana-gas-pjsc-in-connection-with-ongoing-arbitration-proceedings",
    function () {
        var t = jQuery(".item-page .page-header h2")[0].innerText;
        var b = jQuery(".item-page");
        jQuery(".item-page .page-header, .item-page .article-info").remove();
        return {
            title: t,
            body: b[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);