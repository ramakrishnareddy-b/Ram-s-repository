// Lithuania
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.urm.lt/default/en/news/mfa-statement-on-the-agreement-on-the-iranian-nuclear-program",
    function () {
        return {
            title: $(".widget3 h1")[0].innerText.trim(),
            published_s: $(".widget3 .news_date")[0].innerText.split("Updated: ")[1].replace(/\./g, '-').trim(),
            body: $(".widget3 .text")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);