// Trinidad Drilling Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://trinidaddrilling.mediaroom.com/index.php?s=22496&item=137162",
    function () {
        var b = $(".wd_news_releases-detail .news_body")[0].innerText.trim();
        return {
            title: $(".wd_news_releases-detail h1.detail_header")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);