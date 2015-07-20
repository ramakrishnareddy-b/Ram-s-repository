/* Moving from -> Corporate Press Releases/Kuwait Petroleum Corp_list.js */ 
//https://www.kpc.com.kw/press/press-release/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.kpc.com.kw/press/press-release/Pages/default.aspx"], function () {
    var urls = [];
    $(".dfwp-list .dfwp-item .link-item a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});