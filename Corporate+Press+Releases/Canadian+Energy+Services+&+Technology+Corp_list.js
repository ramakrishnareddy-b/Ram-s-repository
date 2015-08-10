//http://www.canadianenergyservices.com/newsreleases
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.canadianenergyservices.com/newsreleases"], function () {
    var urls = [];
    $(".news-group10 a.download-btn").each(function (idx, el) {
        var published_dt=cs.scanForDate($(el).next().text(),"dd‐MM‐yyyy");
        var obj={link:el.href,title:$(el).text(),published_s:published_dt,content:'pdf'};
        urls.push(obj);
    });
    return urls;
});