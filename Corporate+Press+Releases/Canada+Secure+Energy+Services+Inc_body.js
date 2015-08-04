// Secure Energy Services Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://secure-energy.mediaroom.com/2015-07-29-SECURE-Energy-Services-Announces-Two-New-Locations-and-Results-for-the-Second-Quarter-Ended-June-30-2015",
    function () {
        var b = $(".wd_newsfeed_releases-detail .wd_body")[0].innerText.trim();
        return {
            title: $(".wd_newsfeed_releases-detail .wd_title")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);