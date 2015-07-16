//http://presidency.krd/english/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://presidency.krd/english/default.aspx"], function () {
    var urls = [];
    $("#ctl00_main_grid2 a, #ctl00_main_gridhome a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});