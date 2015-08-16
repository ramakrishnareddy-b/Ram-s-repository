//http://www.canacolenergy.com/s/news.asp?investors
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.canacolenergy.com/s/news.asp?investors"], function () {
    var urls = [];
    $("#y2015.active .title").each(function (idx, el) {
        var anc = $(el).find("a")[0];
        var obj={link:anc.href,title:anc.innerText,published_s:$(el).parent().find(".date")[0].innerText.trim(),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});