// Myanmar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.gov.uk/government/news/world-refugee-day-2015-statement-from-justine-greening",
    function () {
        var t = $(".newsarticle .headings-block h1")[0].innerText.trim();
        var ps = $(".newsarticle .headings-block .date")[0].innerText.trim();
        $(".newsarticle .headings-block, .newsarticle .document-share-links, .newsarticle .inner-block .lead-image-sidebar, .newsarticle .inner-block .js-footer").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".newsarticle")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);