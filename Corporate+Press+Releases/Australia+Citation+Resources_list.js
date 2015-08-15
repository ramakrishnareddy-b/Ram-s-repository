//http://citationresources.com.au/display/index/asx-announcements
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://citationresources.com.au/display/index/asx-announcements"], function () {
    var urls = [];
    $(".article-list tbody tr").each(function (idx, el) {
        var anc = $(el).find("a")[0];
        var obj={link:anc.href,title:anc.innerText.trim(),published_s:$(el).find(".date")[0].innerText.trim(),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});