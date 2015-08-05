// Parker Drilling Co
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://parkerdrilling.investorroom.com/index-php-s-19-item-94",
    function () {
        var t = $(".wd_newsfeed_releases-detail .wd_title")[0].innerText.trim();
        $(".wd_newsfeed_releases-detail .wd_title").remove();
        var b = $(".wd_newsfeed_releases-detail")[0].innerText.trim();
        return {
            title: t,
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);