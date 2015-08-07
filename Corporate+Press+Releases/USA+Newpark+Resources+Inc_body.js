// Newpark Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.newpark.com/interests/investors/information-and-reports/news-releases?showNewsItem=2073273&filter[year]=2015&filter[text]=",
    function () {
        return {
            title: jQuery(".newsItem h3")[0].innerText.trim(),
            published_s: jQuery(".newsItem .newsDate")[0].innerText.trim(),
            body: jQuery(".newsItem .wysiwygNewsItem")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);