//http://mtikrg.org/Default.aspx?page=category&c=newsreport
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mtikrg.org/Default.aspx?page=category&c=newsreport"], function () {
    var urls = [];
    $("#ctl08_DataList1").find("> tbody > tr .cattitle2").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});