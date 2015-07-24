// Meg Energy Corporation
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.megenergy.com/news-room/article/meg-energy-release-second-quarter-financial-results-3",
    function(){
        $("#page .body-item .view-links").remove();
        var b = cs.textUpto($("#page .body-item")[0].innerText.trim(), "For further information, please contact:");
        return {
            title: $("#page h1")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);