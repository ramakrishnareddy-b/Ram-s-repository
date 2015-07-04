//http://www.pcm.gob.pe/seccion/noticias/comunicados/

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.pcm.gob.pe/seccion/noticias/comunicados/"], function () {
    var urls = [];
    jQuery("#portfolio-list .title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});