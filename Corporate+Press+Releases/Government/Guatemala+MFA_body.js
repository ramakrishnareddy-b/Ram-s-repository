// Guatemala
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.minex.gob.gt/noticias/Noticia.aspx?ID=4634",
    function () {
        var t = $("#ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .TituloNoticia")[0].innerText.trim();
        var ps = $("#ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .FechaNoticiaFull")[0].innerText.replace(/\//g, "-").trim();
        $("#ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .addthis_toolbox, #ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .addthis_button_compact, #ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .FechaNoticiaFull, #ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .TemaNoticiaFull, #ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 .TituloNoticia, #ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1 #tdImagen").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#ctl00_ContentPlaceHolder1_WebNoticiaFull1_Panel1")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);