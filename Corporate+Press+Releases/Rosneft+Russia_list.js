//http://www.rosneft.com/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.rosneft.com/news/"], function () {
    var urls = [];
    $("#mb12 #mb03 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});