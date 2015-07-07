// Kurdistan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://kurdistaninvestment.org/news4.html",
    function () {
        return {
            title: $(".article h3")[0].innerText,
            body: cs.textUpto($(".article p").text(), "Go back to read more News headlines"),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);