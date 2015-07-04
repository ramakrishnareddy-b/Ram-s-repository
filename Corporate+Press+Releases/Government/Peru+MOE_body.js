// Peru

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.minem.gob.pe/_detallenoticia.php?idSector=8&idTitular=6880",
    function () {
        return {
            title: $("#zonaContenido .titulo").text().trim(),
            published_s: $("#zonaContenido .fecha").text().trim(),
            body: $("#zonaContenido .detalle p").css("text-align", "justify").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);