//http://www.pic.com.kw/Media_Resources.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.pic.com.kw/Media_Resources.html"], function () {
    var urls = [];
    $("#idNewsEvents a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});