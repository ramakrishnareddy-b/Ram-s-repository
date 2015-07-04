// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mireme.gov.mz/index.php/34-esperanca-bias-distinguida-na-italia",
    function () {
        return {
            title: jQuery(".component-content .item-page h2")[0].innerText,
            body: jQuery(".component-content .item-page p").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);