//http://www.crescentpointenergy.com/invest/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.crescentpointenergy.com/invest/news"], function () {
    var urls = [];
    $(".pane[style='display: none;']").remove();
    $(".pane .news_title").each(function (idx, el) {
        var published_dt = $(el).find("span")[0].innerText.trim();
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
