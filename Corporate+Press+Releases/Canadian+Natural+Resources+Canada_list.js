//http://www.cnrl.com/disclaimer.html?redirect=http://www.cnrl.com/media-center/news-releases/2015.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cnrl.com/disclaimer.html?redirect=http://www.cnrl.com/media-center/news-releases/2015.html"], function () {
    var urls = [];
    $(".mediaelement").each(function (idx, el) {
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText.trim(), published_s: $(el).find("h3").text().trim(), content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
