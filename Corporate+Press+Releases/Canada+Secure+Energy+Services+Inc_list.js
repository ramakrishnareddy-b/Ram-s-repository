//http://secure-energy.mediaroom.com/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://secure-energy.mediaroom.com/"], function () {
    var urls = [];
    $(".wd_item_list .wd_title a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});