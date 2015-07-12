//http://kampala.usembassy.gov/press_releases.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://kampala.usembassy.gov/press_releases.html"], function () {
    var urls = [];
    $(".middle-content-article > ul > li > a, .middle-content-article div > ul > li > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});