// Hindustan Petroleum Corporation Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.hindustanpetroleum.com/pressreleasedetails?EnDocID=213",
    function () {
        var t = $("#block-system-main h2")[0].innerText.trim();
        var ps = cs.scanForDate($("#block-system-main p:first")[0].innerText.trim().replace("st","").replace("nd","").replace("th",""), "dd MMMM yyyy");
        $("#block-system-main h2, #block-system-main p:first, #block-system-main p:last, #block-system-main img").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#block-system-main")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);