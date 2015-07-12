// Trinidad and Tobago
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.foreign.gov.tt/news/2015/jul/6/trinidad-tobago-and-south-africa-establish-memoran/",
    function () {
        var t = $(".entry .title")[0].innerText.trim();
        var ps = $(".entry .news-details-date")[0].innerText.replace("Published: ", "").trim();
        var l = window.location.protocol + "//" + window.location.host + $(".entry .news-detail a").attr("href");
        $(".entry .title, .entry .details, .entry .news-detail").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".entry")[0].innerText.trim(),
            links: l,
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);