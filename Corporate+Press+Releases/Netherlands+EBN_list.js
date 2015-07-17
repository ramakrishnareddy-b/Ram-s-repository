//https://www.ebn.nl/nieuws/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.ebn.nl/nieuws/"], function () {
    var urls = [];
    $(".section .mainContainer .bigNewsBlock .permaLink, .section .mainContainer .smallNewsBlock .permaLink, .section .mainContainer .fullContentBlock > ul > li > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});