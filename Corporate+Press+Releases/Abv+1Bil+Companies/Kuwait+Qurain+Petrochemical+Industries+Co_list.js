/* Moving from -> Corporate Press Releases/Kuwait Qurain Petrochemical Industries Co_list.js */ 
//http://www.qpic-kw.com/newsReleases.php
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.qpic-kw.com/newsReleases.php"], function () {
    var urls = [];
    jQuery(".blueLightFont a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});