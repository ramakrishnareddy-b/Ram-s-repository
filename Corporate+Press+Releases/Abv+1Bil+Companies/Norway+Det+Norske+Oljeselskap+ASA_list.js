/* Moving from -> Corporate Press Releases/Norway Det Norske Oljeselskap ASA_list.js */ 
//http://www.detnor.no/en/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.detnor.no/en/news/"], function () {
    var urls = [];
    jQuery("#content a.arkiv-block").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});