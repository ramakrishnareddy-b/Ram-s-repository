//http://www.cuenrg.com.au/irm/content/asx-announcements.aspx?RID=8
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cuenrg.com.au/irm/content/asx-announcements.aspx?RID=8"], function () {
    var urls = [];
    $(".newsitems .article a").each(function (idx, el) {
        var published_dt = $(el).next().parent()[0].innerText.trim();
        var obj = {link: el.href, title: $(el).text().trim(), published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});