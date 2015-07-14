//http://sener.gob.mx/portal/Default.aspx?id=901
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://sener.gob.mx/portal/Default.aspx?id=901"], function () {
    var urls = [];
    $(".text_cont a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});