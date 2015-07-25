// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.sbmoffshore.com/?news=marica-moors-brasa-following-fpsos-arrival-brazil",
    function () {
        return {
            title: jQuery(".single-press-release-wrap h1.entry-title")[0].innerText.trim(),
            published_s: jQuery(".single-press-release-wrap time")[0].innerText.trim(),
            body: jQuery(".single-press-release-wrap .entry-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);