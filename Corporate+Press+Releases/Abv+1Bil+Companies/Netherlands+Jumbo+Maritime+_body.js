/* Moving from -> Corporate Press Releases/Netherlands Jumbo Maritime _list.js */ 
// Netherlands
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("https://www.jumbomaritime.nl/en/news/latest-12-news-items/captain-on-the-bridge/",
    function(){
        var t = jQuery("article .content-wrapper h1")[0].innerText.trim();
        var ps = jQuery(".publication-date")[0].innerText.trim();
        jQuery("article .content-wrapper h1, article .content-wrapper .publication-date, article .content-wrapper .cmp-share").remove();
        var b = jQuery("article .content-wrapper")[0].innerText.trim();
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);