// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.presidencia.gov.mz/index.php/noticias/1147-presidente-filipe-nyusi-inicia-visita-presidencial-a-provincia-de-niassa",
    function () {
        var t = jQuery(".ja-content-main .item-page h2")[0].innerText;
        jQuery(".ja-content-main .item-page h2, .ja-content-main .item-page .article-tools, .ja-content-main .item-page .content-links, .ja-content-main .item-page .ja-thumbnailwrap.thumb-right").remove();
        return {
            title: t,
            body: jQuery(".ja-content-main .item-page")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);