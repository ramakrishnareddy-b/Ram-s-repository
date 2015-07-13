// Peru
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.rree.gob.pe/Noticias/Paginas/NP-089-15.aspx",
    function () {
        var t = $("#mrecontent h1")[0].innerText.trim();
        $("#mrecontent h1").remove();
        return {
            title: t,
            body: $("#mrecontent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);