// Bashneft-cls
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.bashneft.com/press/releases/8185/",
    function () {
        $(".content.wide .news-more-text .return").remove();
        return {
            title: $(".content.wide h1")[0].innerText.trim(),
            published_s: $(".content.wide .news-more-date")[0].innerText.trim(),
            body: $(".content.wide .news-more-text")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);