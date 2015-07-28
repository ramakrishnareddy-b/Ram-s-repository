//http://www.hindustanpetroleum.com/pressrelease
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.hindustanpetroleum.com/pressrelease"], function () {
    var urls = [];
    $(".field-item ul a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});