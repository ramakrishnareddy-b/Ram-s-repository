//http://www.glencore.com/media/news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.glencore.com/media/news/"], function () {
    var urls = [];
    $(".typography ul > li").each(function (idx, el) {
        var anc=$(el).find("a")[0];
        var link_s = anc.href;
        var title =  anc.innerText.trim();
        $(el).find("a").remove();
        var obj = {link: link_s, title: title, published_s: $(el).text().trim().replace(/\//g, '-'), content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
