//http://www.jamstec.go.jp/e/about/press_release/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.jamstec.go.jp/e/about/press_release/"], function () {
    var urls = [];
    $("#contents_area .press a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});