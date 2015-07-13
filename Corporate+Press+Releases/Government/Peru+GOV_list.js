//http://www.rree.gob.pe/noticias/Paginas/Notas_de_Prensa.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.rree.gob.pe/noticias/Paginas/Notas_de_Prensa.aspx"], function () {
    var urls = [];
    $(".WPU-Tablem2TD h3 > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});