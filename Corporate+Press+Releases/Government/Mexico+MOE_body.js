// Mexico
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://sener.gob.mx/portal/Default_blt.aspx?id=3236",
    function () {
        var t = $(".text_cont > p > strong:first")[0].innerText.trim();
        var ps = $(".text_cont .Fecha_listado")[0].innerText.trim();
        $(".text_cont > p > strong:first, .text_cont .Fecha_listado, .text_cont img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".text_cont .texto_registro")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);