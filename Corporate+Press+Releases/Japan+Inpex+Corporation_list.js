//http://www.inpex.co.jp/english/news/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.inpex.co.jp/english/news/index.html"], function () {
    var urls = [];
    $("#releases .entry tr").each(function (idx, el) {
        var published_dt = $(el).find("th")[0].innerText.trim().replace(/\./g, '');
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});
