//http://www.sk.com/Channel/News/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.sk.com/Channel/News/"], function () {
    var urls = [];
    $(".listwrap .pic").remove();
    $(".listwrap a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});