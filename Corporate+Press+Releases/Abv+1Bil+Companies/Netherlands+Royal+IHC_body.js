/* Moving from -> Corporate Press Releases/Netherlands Royal IHC_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ihcmerwede.com/about-royal-ihc/media/news/article/royal-ihc-accelerates-introduction-of-planned-2020-strategy/",
    function () {
        var t = jQuery(".news-single-item h1")[0].innerText.trim();
        var ps = jQuery(".news-single-item .news-single-timedata")[0].innerText.trim();
        var urls = [];
        jQuery(".news-single-item .contenttable .bodytext a").each(function (idx, el) {
            urls.push(el.href);
        });
        jQuery(".news-single-item h1, .news-single-item .contenttable .bodytext a, .news-single-item .news-single-timedata, .news-single-item .news-single-category, .news-single-item .news-single-backlink").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".news-single-item")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);