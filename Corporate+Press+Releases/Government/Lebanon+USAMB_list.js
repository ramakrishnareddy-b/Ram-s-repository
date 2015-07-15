//http://lebanon.usembassy.gov/pressreleases_2015.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://lebanon.usembassy.gov/pressreleases_2015.html"], function () {
    var urls = [];
    $(".middle-content-article > ul > li > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});