//http://birchcliffenergy.com/investors/news-releases/?year=2015
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://birchcliffenergy.com/investors/news-releases/?year=2015"], function () {
    var urls = [];
    $('.column-stack').each(function (idx, el) {
        var published_dt = $(el).find('h3')[0].innerText.trim();
        var anc=$(el).find('a')[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});