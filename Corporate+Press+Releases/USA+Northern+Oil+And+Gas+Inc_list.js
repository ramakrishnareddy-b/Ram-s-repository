//http://ir.northernoil.com/releases.cfm?view=all
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.northernoil.com/releases.cfm?view=all"], function () {
    var urls = [];
    jQuery(".wsh-dataTable th, .wsh-dataTable .ndq-filetypes").remove();
    jQuery(".wsh-dataTable a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});