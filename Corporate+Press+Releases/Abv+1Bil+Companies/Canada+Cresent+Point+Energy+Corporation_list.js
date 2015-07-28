/* Moving from -> Corporate Press Releases/Canada Cresent Point Energy Corporation_list.js */ 
//http://www.crescentpointenergy.com/invest/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.crescentpointenergy.com/invest/news"], function () {
    var urls = [];
    var a = $(".tabs .current")[0].innerText.trim();
    $('#' + a + ' .news_title a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});