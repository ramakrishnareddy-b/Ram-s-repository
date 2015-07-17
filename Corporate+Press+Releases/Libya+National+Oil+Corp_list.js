//http://noc.ly/index.php/en/new-4
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://noc.ly/index.php/en/new-4"], function () {
    var urls = [];
    jQuery(".table td.list-title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});