// Morocco
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.onhym.com/en/news-feed/372-26-06-2015-results-of-lam-1-well-on-lalla-mimouna-permit.html",
    function () {
        var t_ps = jQuery(".art-post-inner h2")[0].innerText.split(":");
        var t = t_ps[1].trim();
        var ps = t_ps[0].trim();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".art-post-inner .art-article #articlepxfontsize1")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);