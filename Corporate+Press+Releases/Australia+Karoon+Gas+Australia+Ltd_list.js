//http://www.karoongas.com.au/news.php?yr=2015
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.karoongas.com.au/news.php?yr=2015"], function () {
    var urls = [];
    $(".midleft .name_colmn").each(function (idx, el) {
        var anc = $(el).find("a")[0];
        var obj={link:anc.href,title:anc.innerText.trim(),published_s: cs.scanForDate($(el).find(".date")[0].innerText.trim(), "MMMM dd, yyyy"),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});