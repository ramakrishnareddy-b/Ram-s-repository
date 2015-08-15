//http://www.petrelenergy.com/irm/content/asx-announcements.aspx?RID=8&RedirectCount=1
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.petrelenergy.com/irm/content/asx-announcements.aspx?RID=8&RedirectCount=1"], function () {
    var urls = [];
    $(".newsitems .article").each(function (idx, el) {
        var anc = $(el).find("a")[0];
        var obj={link:anc.href,title:anc.innerText.trim(),published_s:$(el).find(".articleDate")[0].innerText.trim(),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});