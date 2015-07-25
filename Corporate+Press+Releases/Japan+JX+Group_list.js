//http://www.noe.jx-group.co.jp/english/press/2015/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.noe.jx-group.co.jp/english/press/2015/index.html"], function () {
    var urls = [];
    $("#mainContents .releaseList01 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});