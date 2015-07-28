// Prosafe SE
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.prosafe.com/news-room/prosafe-appoints-new-chief-financial-officer-article2637-11.html",
    function () {
        return {
            title: $("#top .main_article_top_no_left")[0].innerText.trim(),
            body: $("#top .main_article_content_no_left")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);