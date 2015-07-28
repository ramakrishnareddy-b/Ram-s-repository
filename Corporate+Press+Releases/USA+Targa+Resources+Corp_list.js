//http://ir.targaresources.com/trc/news.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.targaresources.com/trc/news.cfm"], function () {
    var urls = [];
    $(".dataTable .ndq-next, .dataTable .wsh_file_Type").remove();
    $(".dataTable a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});