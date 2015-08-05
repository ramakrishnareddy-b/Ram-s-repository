//http://ir.breitburn.com/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.breitburn.com/releases.cfm"], function () {
    var urls = [];
    $(".wsh-dataTable a.newsTitle").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});