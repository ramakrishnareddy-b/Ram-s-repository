//http://www.sunocologistics.com/Investors/News-Releases/44/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.sunocologistics.com/Investors/News-Releases/44/"], function () {
    var urls = [];
    $("#main .cms-textitemlist-table .sxl-news-item").each(function (idx, el) {
        var published_dt = $(el).find(".sxl-news-date")[0].innerText.trim().replace(/\//g,'-');
        var anc=$(el).find(".sxl-news-link")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
