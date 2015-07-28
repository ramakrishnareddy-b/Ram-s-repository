//http://ir.eaglerockenergy.com/releases.cfm?view=all
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.eaglerockenergy.com/releases.cfm?view=all"], function () {
    var urls = [];
    jQuery(".wsh-dataTable [data-before='Title'] a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});