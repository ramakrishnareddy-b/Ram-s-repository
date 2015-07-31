//http://www.excoresources.com/new-releases.htm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.excoresources.com/new-releases.htm"], function () {
    var urls = [];
    $("#mainRightContent tr:nth-child(1)").remove();
    $("#mainRightContent tr:nth-child(1)").remove();
    $("#mainRightContent a").each(function (idx, el) {
        if(el.href.indexOf(document.location.origin) >= 0) {
            urls.push(el.href);
        }
    });
    return urls;
});