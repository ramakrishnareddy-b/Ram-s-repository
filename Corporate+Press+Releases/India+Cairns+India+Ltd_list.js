//https://www.cairnindia.com/media
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.cairnindia.com/media"], function () {
    var urls = [];
    $(".pressre li.first").each(function (idx, el) {
        var published_dt = $(el).find(".date-display-single")[0].innerText.trim();
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
