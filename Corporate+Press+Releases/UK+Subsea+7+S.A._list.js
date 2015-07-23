//http://www.subsea7.com/en/media-centre.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.subsea7.com/en/media-centre.html"], function () {
    var urls = [];
    $(".parsys_column .featured_article_blurb a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});