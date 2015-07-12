// Trinidad And Tobago
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.opm.gov.tt/media_centre.php?mid=5&eid=691",
    function () {
        var t = $("#results_container h2")[0].innerText.trim();
        var ps = $("#results_container #event_details .first")[0].innerText.replace("Date: ", "").replace(/,/g, "").trim();
        $("#results_container h2, #results_container #event_details").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#results_container")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);
