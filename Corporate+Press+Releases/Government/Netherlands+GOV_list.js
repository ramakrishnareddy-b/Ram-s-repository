//http://www.government.nl/news
//http://www.government.nl/ministries/bz/news
//http://www.government.nl/ministries/ienm/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.government.nl/news", "http://www.government.nl/ministries/bz/news", "http://www.government.nl/ministries/ienm/news"], function () {
    var urls = [];
    $(".article .headline .visual a, .article .regulars a, .news").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});