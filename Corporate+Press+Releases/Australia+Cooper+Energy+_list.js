//http://www.cooperenergy.com.au/investor-information/asx-announcements
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cooperenergy.com.au/investor-information/asx-announcements"], function () {
    var urls = [];
    $(".sub-page-list a").each(function (idx, el) {
        var published_dt = $(el).find(".date").text().trim();
        $(el).find(".date").remove();
        var obj={link:el.href,title:$(el).text().trim(),published_s:published_dt,content:'pdf'};
        urls.push(obj);
    });
    return urls;
});