//http://www.ihcmerwede.com/about-royal-ihc/media/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ihcmerwede.com/about-royal-ihc/media/news/"], function () {
    var urls = [];
    jQuery(".item-list .overlay a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});