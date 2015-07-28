/* Moving from -> Corporate Press Releases/Australia WorleyParsons Ltd_list.js */ 
//http://www.worleyparsons.com/News/Pages/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.worleyparsons.com/News/Pages/default.aspx"], function () {
    var urls = [];
    $(".news-line-item .title a.link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});