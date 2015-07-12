// Peru

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.minem.gob.pe/_detallenoticia.php?idSector=8&idTitular=6880",
    function () {
        return {
            title: $("#zonaContenido .titulo")[0].innerText.trim(),
            published_s: $("#zonaContenido .fecha")[0].innerText.trim(),
            body: $("#zonaContenido .detalle")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);