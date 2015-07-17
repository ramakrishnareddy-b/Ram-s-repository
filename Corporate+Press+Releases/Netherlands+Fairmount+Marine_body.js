// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.fairmount.nl/index.php/news/detail/285",
    function () {
        var t = $(".content_main h2")[0].innerText.trim();
        var ps = cs.scanForDate($(".content_main h4.news_date")[0].innerText.trim(), "yyyy-MM-dd");
        $(".content_main h2, .content_main h4.news_date, .content_main img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".content_main")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);