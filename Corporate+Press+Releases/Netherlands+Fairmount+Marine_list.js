//http://www.fairmount.nl/index.php/news_archive
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.fairmount.nl/index.php/news_archive"], function () {
    var urls = [];
    $(".content_main h2 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});