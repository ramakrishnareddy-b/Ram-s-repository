/* Moving from -> Corporate Press Releases/Netherlands GustoMSC_list.js */ 
//http://www.gustomsc.com/index.php/separator-10464/separator
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.gustomsc.com/index.php/separator-10464/separator"], function () {
    var urls = [];
    jQuery(".items-col-2 .item .links a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});