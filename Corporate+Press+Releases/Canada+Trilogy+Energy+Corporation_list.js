//http://www.trilogyenergy.com/investor-relations/news-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.trilogyenergy.com/investor-relations/news-releases/"], function () {
    var urls = [];
    $(".news-index-listing dl").each(function (idx, el) {
        var published_dt = $(el).find("dt")[0].innerText.trim();
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: $(el).find("span")[0].innerText.trim(), published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
