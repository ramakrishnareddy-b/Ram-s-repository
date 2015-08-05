//http://archerwell.com/press/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://archerwell.com/press/"], function () {
    var urls = [];
    $(".archive-list a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});