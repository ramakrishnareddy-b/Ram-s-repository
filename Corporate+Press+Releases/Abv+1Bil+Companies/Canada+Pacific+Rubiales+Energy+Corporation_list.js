/* Moving from -> Corporate Press Releases/Canada Pacific Rubiales Energy Corporation_list.js */ 
//http://pacificrubiales.mediaroom.com/index.php?s=20295
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://pacificrubiales.mediaroom.com/index.php?s=20295"], function () {
    var urls = [];
    $(".spintable .item .item_name a.itemlink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});