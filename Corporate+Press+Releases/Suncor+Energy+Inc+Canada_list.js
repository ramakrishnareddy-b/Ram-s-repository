//http://www.suncor.com/en/newsroom/404.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.suncor.com/en/newsroom/404.aspx"], function () {
    var urls = [];
    $(".rightColPageData #newsItem > a.bluetextbold").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});