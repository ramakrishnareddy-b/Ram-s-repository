/* Moving from -> Corporate Press Releases/Netherlands Tebodin_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.tebodin.bilfinger.com/news/news/news-detail/article/4496/",
    function () {
        var t = $(".news-single-item h1")[0].innerText.trim();
        var ps = $(".news-single-item .news-date")[0].innerText.trim().replace(/\./g, '-');
        $(".news-single-item .news-date, .news-single-item h1").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".news-single-item")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);