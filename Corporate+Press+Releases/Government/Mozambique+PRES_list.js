//http://www.presidencia.gov.mz/index.php/noticias
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.presidencia.gov.mz/index.php/noticias"], function () {
    var urls = [];
    jQuery(".blog .items-row .contentheading a, .blog .items-more ol>li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});