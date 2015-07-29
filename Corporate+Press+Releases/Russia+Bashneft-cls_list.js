//http://www.bashneft.com/press/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.bashneft.com/press/"], function () {
    var urls = [];
    $("#press .item a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});