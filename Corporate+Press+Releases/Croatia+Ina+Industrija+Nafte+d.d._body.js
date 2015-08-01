// Ina Industrija Nafte d.d.
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ina.hr/default.aspx?id=21798",
    function () {
        var b = cs.textUpto($(".pageContent .central .pageBody")[0].innerText.trim(), "Click here for announcement in word");
        return {
            title: $(".pageContent .central h1")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "dd MMMM yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);