//http://www.primature.gov.mr/fr/index.php?link=3&idcat=4
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.primature.gov.mr/fr/index.php?link=3&idcat=4"], function () {
    var urls = [];
    $(".mytext2 strong a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});