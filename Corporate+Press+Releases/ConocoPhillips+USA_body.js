// ConocoPhillips
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.conocophillips.com/newsroom/Pages/news-releases.aspx?docid=2561094",
    function () {
        var t = $(".news-item .newsroomh2")[0].innerText.trim();
        var ps = $(".news-item p strong")[0].innerText.trim();
        var l = $(".news-item p a").attr("href");
        $(".news-item .newsroomh2").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".news-item")[0].innerText.trim(),
            link: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);