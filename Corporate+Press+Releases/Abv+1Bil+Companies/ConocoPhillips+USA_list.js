/* Moving from -> Corporate Press Releases/ConocoPhillips USA_list.js */ 
//http://www.conocophillips.com/newsroom/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.conocophillips.com/newsroom/Pages/default.aspx"], function () {
    var urls = [];
    $(".news-pod li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});