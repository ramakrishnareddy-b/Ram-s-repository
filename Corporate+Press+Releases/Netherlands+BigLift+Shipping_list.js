//http://www.bigliftshipping.com/news/latest
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.bigliftshipping.com/news/latest"], function () {
    var urls = [];
    $(".bricks .brick a.button").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});