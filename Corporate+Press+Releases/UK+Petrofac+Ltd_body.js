// Petrofac Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.petrofac.com/media/news/2015/july/13/petrofac-training-services-guides-p2d-through-competency-assurance.aspx?Section=PRESS%20RELEASES&Category=CONTRACT%20AND%20PROJECT&Year=2015",
    function () {
        var t = $(".body-text h1")[0].innerText.trim();
        $(".body-text h1, .body-text a, .body-text img").remove();
        var b =  $(".body-text")[0].innerText.trim();
        var ps = cs.scanForDate(b, "dd MMMM yyyy");
        b.replace(ps, "");
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);