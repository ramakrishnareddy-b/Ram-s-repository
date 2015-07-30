//http://translate.google.com.sg/translate?hl=en&sl=ar&u=http://www.pm.gov.ly/&prev=search
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://translate.google.com.sg/translate?hl=en&sl=ar&u=http://www.pm.gov.ly/&prev=search"], function () {
    var urls = [];
    $(".moduleItemImage").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});