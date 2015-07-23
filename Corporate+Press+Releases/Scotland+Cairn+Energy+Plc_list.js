//http://www.cairnenergy.com/index.asp?pageid=153
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cairnenergy.com/index.asp?pageid=153"], function () {
    var urls = [];
    $(".linkslist .nospace a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});