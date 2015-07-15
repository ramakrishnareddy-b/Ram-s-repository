// Lebanon
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://lebanon.usembassy.gov/pr_070615.html",
    function () {
        var t = $(".middle-content-article h1")[0].innerText.trim();
        var ps = $(".middle-content-article h6")[0].innerText.trim();
        $(".middle-content-article h1, .middle-content-article h6, .middle-content-article a").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".middle-content-article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);