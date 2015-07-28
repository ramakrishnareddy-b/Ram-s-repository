/* Moving from -> Corporate Press Releases/Japan Fuji Oil Co_list.js */ 
//http://www.foc.co.jp/en/newstopics/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.foc.co.jp/en/newstopics/"], function () {
    var urls = [];
    jQuery('.bodyText p a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});