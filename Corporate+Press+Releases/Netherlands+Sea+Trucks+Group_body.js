// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.seatrucksgroup.com/media-center/press-releases/2015/sea-trucks-group-announces-first-contract-win-in-brazil",
    function () {
        var t = jQuery(".article h1")[0].innerText.trim();
        var ps = jQuery(".pressRelease_top span")[0].innerText.trim();
        jQuery(".article h1, .article img").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);