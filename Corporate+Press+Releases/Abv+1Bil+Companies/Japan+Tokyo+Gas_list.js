/* Moving from -> Corporate Press Releases/Japan Tokyo Gas_list.js */ 
//http://www.tokyo-gas.co.jp/Press_e/list_e.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.tokyo-gas.co.jp/Press_e/list_e.html"], function () {
    var urls = [];
    $(".pressArea a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});