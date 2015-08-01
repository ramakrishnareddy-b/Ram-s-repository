//http://www.fangdacarbon.com/en/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.fangdacarbon.com/en/"], function () {
    var urls = [];
    $(".default-right a").each(function (idx, el) {
        if(urls.indexOf(el.href) == -1) {
            urls.push(el.href);
        }
    });
    return urls;
});