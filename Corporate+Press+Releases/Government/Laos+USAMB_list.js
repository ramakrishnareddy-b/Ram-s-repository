//http://laos.usembassy.gov/pres_2015pres.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://laos.usembassy.gov/pres_2015pres.html"], function () {
    var urls = [];
    $(".middle-content-article ul > li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});