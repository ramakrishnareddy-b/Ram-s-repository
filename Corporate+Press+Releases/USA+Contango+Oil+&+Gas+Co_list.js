//http://ir.contango.com/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.contango.com/releases.cfm"], function () {
    var urls = [];
    $(".dataTable .noprint, .dataTable .wsh_file_Type, .dataTable .wsh_briefcase, .dataTable .dataTableBottom").remove();
    $(".dataTable a").each(function (idx, el) {
        if(urls.indexOf(el.href) == -1) {
            urls.push(el.href);
        }
    });
    return urls;
});