//http://www.minex.gob.gt/noticias/NoticiasxTemas.aspx?cTema=36
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.minex.gob.gt/noticias/NoticiasxTemas.aspx?cTema=36"], function () {
    var urls = [];
    $(".dxncContent .dxncItem .dxncItemHeader a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});