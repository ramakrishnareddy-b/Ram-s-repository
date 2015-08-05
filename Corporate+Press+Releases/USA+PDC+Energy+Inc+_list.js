//http://investor.pdce.com/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investor.pdce.com/releases.cfm"], function () {
    var urls = [];
    $(".dataTable .wsh_more a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});