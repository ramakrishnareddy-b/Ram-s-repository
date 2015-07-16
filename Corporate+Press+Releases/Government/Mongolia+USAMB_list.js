//http://mongolia.usembassy.gov/news.html
//http://mongolia.usembassy.gov/press-releases.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mongolia.usembassy.gov/news.html", "http://mongolia.usembassy.gov/press-releases.html"], function () {
    var urls = [];
    $(".main_listing .ipagination").remove();
    $(".main_listing .box-body h5 > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});