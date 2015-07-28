//http://www.petrobras.com/es/paises/argentina/noticias/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.petrobras.com/es/paises/argentina/noticias/"], function () {
    var urls = [];
    $("#news-list a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});