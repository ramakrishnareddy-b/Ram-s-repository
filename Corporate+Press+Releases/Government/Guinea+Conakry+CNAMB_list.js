//http://gn.chineseembassy.org/fra/zxxx/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://gn.chineseembassy.org/fra/zxxx/"], function () {
    var urls = [];
    $("#content a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});