//http://www.dmlp.net/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.dmlp.net/releases.cfm"], function () {
    var urls = [];
    $(".dataTable .noprint, .dataTable .wsh_file_Type, .dataTable .dataTableBottom").remove();
    $(".dataTable .wsh_more a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});