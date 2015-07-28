/* Moving from -> Corporate Press Releases/Sinopec Corporation China_list.js */ 
//http://www.total.com/en/media
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.total.com/en/media"], function () {
    var urls = [];
    jQuery(".dated-results > li > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});