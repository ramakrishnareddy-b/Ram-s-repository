//http://www.ganger-rolf.com/press-release
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ganger-rolf.com/press-release"], function () {
    var urls = [];
    $(".eventList a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});