//http://libya.usembassy.gov/news-events/news-from-the-embassy2.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://libya.usembassy.gov/news-events/news-from-the-embassy2.html"], function () {
    var urls = [];
    $(".main_listing h5 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});