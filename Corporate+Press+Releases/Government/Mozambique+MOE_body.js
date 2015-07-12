// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mireme.gov.mz/index.php/34-esperanca-bias-distinguida-na-italia",
    function () {
        var t = jQuery(".component-content .item-page h2")[0].innerText;
        jQuery(".component-content .item-page h2").remove();
        return {
            title: t,
            body: jQuery(".component-content .item-page")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);