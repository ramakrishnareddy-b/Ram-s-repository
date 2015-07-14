//http://www.minec.gov.mz
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.minec.gov.mz"], function () {
    var urls = [];
    $(".blog a.readon, .blog_more > ul > li > a.blogsection").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});