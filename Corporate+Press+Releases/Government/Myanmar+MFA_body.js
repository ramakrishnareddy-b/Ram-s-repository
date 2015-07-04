// Myanmar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mofa.gov.mm/?p=4553",
    function () {
        return {
            title: jQuery(".post-content .post-title").text().trim(),
            published_s: jQuery(".post-content .post-date").text().trim(),
            body: jQuery(".post-content").css("text-align", "justify").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);