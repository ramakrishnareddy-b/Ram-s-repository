/* Moving from -> Corporate Press Releases/OXY - Occidental Petroleum Corporation USA_list.js */ 
//http://www.oxy.com/news/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.oxy.com/news/Pages/default.aspx"], function () {
    var urls = [];
    $(".accordion .accordion-group .oxyReadMoreLink a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});