// Myanmar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mofa.gov.mm/?p=4553",
    function () {
        return {
            title: jQuery(".post-content .post-title")[0].innerText,
            published_s: jQuery(".post-content .post-date")[0].innerText.replace(/\//g,'-'),
            body: jQuery(".post-content .entry")[0].innerText,
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);