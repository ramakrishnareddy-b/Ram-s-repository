//http://ir.linnenergy.com/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.linnenergy.com/releases.cfm"], function () {
    var urls = [];
    $(".wsh-dataTable .ndq-filetypes a.ndqicon-html-1").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});