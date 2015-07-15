// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.antananarivo.usembassy.gov/embassy_news/press-releases2/press-releases6.html",
    function () {
        var t = $(".middle-content-article h1")[0].innerText.trim();
        $(".middle-content-article h1, .middle-content-article a").remove();
        return {
            title: t,
            body: $(".middle-content-article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);