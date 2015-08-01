// Statoil
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.statoil.com/en/NewsAndMedia/News/2015/Pages/2Q2015xxxyyy.aspx",
    function () {
        var t = $(".newsArticlePage .span6 .articleHeader h1")[0].innerText.trim();
        $(".newsArticlePage .span6 .articleHeader, .newsArticlePage .span6 .articleFooter, .newsArticlePage .span6 img").remove();
        return {
            title: t,
            body: $(".newsArticlePage .span6")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);