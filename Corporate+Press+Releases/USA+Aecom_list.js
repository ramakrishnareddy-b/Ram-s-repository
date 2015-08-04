//http://aecom.com/News/Press+Releases?_ga=1.160183483.747549448.1437992856
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://aecom.com/News/Press+Releases?_ga=1.160183483.747549448.1437992856"], function () {
    var urls = [];
    $(".linkList_2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});