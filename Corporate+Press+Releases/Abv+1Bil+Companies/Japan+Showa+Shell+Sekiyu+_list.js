/* Moving from -> Corporate Press Releases/Japan Showa Shell Sekiyu _list.js */ 
//http://www.showa-shell.co.jp/english/press_release/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.showa-shell.co.jp/english/press_release/index.html"], function () {
    var urls = [];
    $(".content .prframe a.link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});