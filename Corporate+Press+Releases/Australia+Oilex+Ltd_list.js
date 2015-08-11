//https://www.oilex.com.au/investor-information/announcements/all
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.oilex.com.au/investor-information/announcements/all"], function () {
    var urls = [];
    $(".article-full-list a").each(function (idx, el) {
        var obj={link:el.href,title:$(el).find("h2").text().trim(),published_s:$(el).find("time").text(),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});