//http://investors.sandridgeenergy.com/investor-relations/press-releases/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investors.sandridgeenergy.com/investor-relations/press-releases/default.aspx"], function () {
    var urls = [];
    $(".newsWidget .newsList .ModuleItemRow .right").each(function (idx, el) {
        var published_dt = $(el).find(".ModuleDate")[0].innerText.trim().replace(/\//g, '-');
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: $(el).find(".ModuleHeadline")[0].innerText.trim(), published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
