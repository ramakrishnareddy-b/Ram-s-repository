//http://www.tapoil.com.au/irm/archive/asx-announcements.aspx?RID=288
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.tapoil.com.au/irm/archive/asx-announcements.aspx?RID=288"], function () {
    var urls = [];
    $(".newsitems .article").each(function (idx, el) {
        var anc = $(el).find("a")[0];
        var obj={link:anc.href,title:anc.innerText.trim(),published_s:$(el).find(".articleDate").text(),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});
