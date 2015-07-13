//http://mz.china-embassy.org/por/xwdt/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mz.china-embassy.org/por/xwdt/"], function () {
    var urls = [];
    $("#docMore > table > tbody > tr > td > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});