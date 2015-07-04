//http://www.minem.gob.pe/_noticias.php

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.minem.gob.pe/_noticias.php"], function () {
    var urls = [];
    $("#listaNotas .item").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});