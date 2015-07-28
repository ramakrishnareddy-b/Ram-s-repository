/* Moving from -> Corporate Press Releases/USA Hollyfrontier Corporation_list.js */ 
//http://investor.hollyfrontier.com/releases.cfm
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investor.hollyfrontier.com/releases.cfm"], function () {
    var urls = [];
    jQuery(".wsh-dataTable a.ndqicon-html-1").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});