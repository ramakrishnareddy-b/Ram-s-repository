/* Moving from -> Corporate Press Releases/Kuwait National Petroleum Co_list.js */ 
//http://www.knpc.com.kw/en/MediaCentre/News/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.knpc.com.kw/en/MediaCentre/News/Pages/default.aspx"], function () {
    var urls = [];
    $(".cbq-layout-main .dfwp-item .moreBtn").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});