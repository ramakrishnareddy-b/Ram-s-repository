//http://www.prosafe.com/news-room/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.prosafe.com/news-room/"], function () {
    var urls = [];
    $(".full-articlelist h4 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});