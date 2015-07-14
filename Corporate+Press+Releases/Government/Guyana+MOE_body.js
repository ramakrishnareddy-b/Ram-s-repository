// Guyana
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://nre.gov.gy/Guyanas%20forests%20are%20safe%20and%20will%20always%20be%20managed%20in%20a%20sustainable%20way%20President%20on%20Intl%20Day%20of%20Forests.%20March%2023%202015.html",
    function () {
        var t = $("#mainContent h2")[0].innerText.trim();
        var ps = cs.scanForDate($("#mainContent p:first")[0].innerText,"MMMM dd, yyyy");
        $("#mainContent h2, #mainContent p:first, #mainContent .style26, #mainContent > img").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#mainContent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);