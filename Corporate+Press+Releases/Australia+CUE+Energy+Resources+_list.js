//http://www.cuenrg.com.au/irm/content/asx-announcements.aspx?RID=8
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cuenrg.com.au/irm/content/asx-announcements.aspx?RID=8"], function () {
    var urls = [];
    $(".newsitems .article").each(function (idx, el) {
        var published_dt = $(el).find(".articleDate")[0].innerText.trim();
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
