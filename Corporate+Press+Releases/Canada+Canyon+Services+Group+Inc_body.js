// Canyon Services Group Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.canyontech.ca/newsroom/articles/article-122602/",
    function () {
        return {
            title: $(".news_article .entry-title")[0].innerText.trim(),
            published_s: $(".news_article .date-label")[0].innerText.trim().replace(/\//g, '-'),
            body: $(".news_article .entry-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);