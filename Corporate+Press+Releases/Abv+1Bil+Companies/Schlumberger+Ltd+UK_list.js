/* Moving from -> Corporate Press Releases/Schlumberger Ltd UK_list.js */ 
//http://www.slb.com/news.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.slb.com/news.aspx"], function () {
    var urls = [];
    jQuery(".content-center-column .td-links a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});