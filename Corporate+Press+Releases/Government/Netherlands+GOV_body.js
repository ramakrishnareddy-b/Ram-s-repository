// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.government.nl/news/2015/07/10/no-extraction-of-shale-gas-during-the-next-five-years.html",
    function () {
        var t = $(".article h1")[0].innerText.trim();
        var ps = $(".article .article-meta")[0].innerText.split(" | ")[1].trim();
        $(".article h1, .article .article-meta, .article .docs-pubs").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);