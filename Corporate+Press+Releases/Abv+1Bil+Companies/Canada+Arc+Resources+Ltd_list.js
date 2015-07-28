/* Moving from -> Corporate Press Releases/Canada Arc Resources Ltd_list.js */ 
//http://arcresources.mediaroom.com
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://arcresources.mediaroom.com"], function () {
    var urls = [];
    $(".spintable .item a.itemlink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});