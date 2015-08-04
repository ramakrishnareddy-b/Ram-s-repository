//http://www.resoluteenergy.com/2015_press.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.resoluteenergy.com/2015_press.html"], function () {
    var urls = [];
    $("#press_table a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});