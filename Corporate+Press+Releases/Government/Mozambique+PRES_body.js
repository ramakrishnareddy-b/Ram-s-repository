// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.presidencia.gov.mz/index.php/noticias/1147-presidente-filipe-nyusi-inicia-visita-presidencial-a-provincia-de-niassa",
    function () {
        return {
            title: jQuery(".ja-content-main .item-page h2")[0].innerText,
            body: jQuery(".ja-content-main .item-page p").css("text-align", "justify").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);