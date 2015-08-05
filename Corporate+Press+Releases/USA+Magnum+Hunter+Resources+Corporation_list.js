//http://www.magnumhunterresources.com/pressreleases.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.magnumhunterresources.com/pressreleases.html"], function () {
    var urls = [];
    $(".b2iNewsListContent .b2iNewsItemHeadline a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});