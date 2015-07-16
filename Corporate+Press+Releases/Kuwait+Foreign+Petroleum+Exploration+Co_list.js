//http://www.kufpec.com/AboutKUFPEC/Pages/NewsRoom.aspx#myAnchor
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kufpec.com/AboutKUFPEC/Pages/NewsRoom.aspx#myAnchor"], function () {
    var urls = [];
    $("#WebPartWPQ1 .newsByline a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});