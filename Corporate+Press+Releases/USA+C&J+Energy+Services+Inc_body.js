// C&J Energy Services Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.cjenergy.com/news-events/press-releases/cj-energy-services-belfield-north-dakota-facility-earns-osha-vpp-star-certi",
    function () {
        return {
            title: $(".article-large h2")[0].innerText.trim(),
            published_s: $(".article-large .article-meta p")[0].innerText.trim(),
            body: $(".article-large .article-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);