//http://www.antananarivo.usembassy.gov/embassy_news/press-releases2.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.antananarivo.usembassy.gov/embassy_news/press-releases2.html"], function () {
    var urls = [];
    $(".main_listing .box-body > ul > li > h5 > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});