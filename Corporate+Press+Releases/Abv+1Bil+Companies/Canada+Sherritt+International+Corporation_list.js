/* Moving from -> Corporate Press Releases/Canada Sherritt International Corporation_list.js */ 
//http://www.sherritt.com/newsroom
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.sherritt.com/newsroom"], function () {
    var urls = [];
    jQuery(".careertbl a.style2").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});