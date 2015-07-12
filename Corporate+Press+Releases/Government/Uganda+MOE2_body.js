// Uganda
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.petroleum.go.ug/news/33/CLOSURE-OF-THE-APPLICATION-FOR-QUALIFICATION-OF-THE-LICENSING-ROUND-FOR-PETROLEUM-EXPLORATION-DEVELOPMENT-AND-PRODUCTION-BLOCKS-IN-UGANDA",
    function () {
        var t = jQuery(".media-body .blog-desc-container .media-heading")[0].innerText.trim();
        jQuery(".media-body .blog-desc-container .media-heading").remove();
        return {
            title: t,
            published_s: jQuery(".media-body .blog-date")[0].innerText.replace(/\n/g, " ").trim(),
            body: jQuery(".media-body .blog-desc-container .overview")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);