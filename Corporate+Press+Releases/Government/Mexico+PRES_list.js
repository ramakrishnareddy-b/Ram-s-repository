//http://en.presidencia.gob.mx/press/press-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://en.presidencia.gob.mx/press/press-releases/"], function () {
    var urls = [];
    $(".match-children-height h1 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});