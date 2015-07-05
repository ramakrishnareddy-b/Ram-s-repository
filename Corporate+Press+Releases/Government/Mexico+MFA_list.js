//http://en.sre.gob.mx/index.php/archived-press-releases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://en.sre.gob.mx/index.php/archived-press-releases"], function () {
    var urls = [];
    $(".sectiontableentry1 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});