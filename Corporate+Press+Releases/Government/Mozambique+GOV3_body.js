// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.portaldogoverno.gov.mz/noticias/news_folder_politica/julho-de-2015/presidente-da-republica-efectua-visita-de-estado-a-portugal/",
    function () {
        var t = $(".documentContent .documentFirstHeading")[0].innerText.trim();
        $(".documentContent .documentFirstHeading, .documentContent .documentActions").remove();
        return {
            title: t,
            body: $(".documentContent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);