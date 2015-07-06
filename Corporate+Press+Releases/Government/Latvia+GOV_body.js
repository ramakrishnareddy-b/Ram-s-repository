// Latvia
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mk.gov.lv/en/aktualitates/prime-ministers-address-press-conference-european-council",
    function () {
        return {
            title: jQuery(".content.clearfix h1")[0].innerText,
            published_s: jQuery(".content.clearfix .publication-info .field-type-datetime")[0].innerText.trim().replace(/\./g, '-'),
            body: jQuery(".content.clearfix .field-name-body")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);