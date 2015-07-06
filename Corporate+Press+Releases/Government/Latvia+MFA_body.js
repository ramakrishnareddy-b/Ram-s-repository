// Latvia
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mfa.gov.lv/en/news/latest-news/47282-edgars-rinkevics-presents-the-translator-s-award-for-the-translation-of-eduards-veidenbaums-poetry-into-estonian",
    function () {
        return {
            title: jQuery(".content-core .content h1")[0].innerText,
            published_s: jQuery(".content-core .content .published")[0].innerText.replace(". ", " ").replace(/\./g, '-'),
            body: jQuery(".content-core .content .fulltext")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);