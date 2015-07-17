// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.arcadis.com/press/ARCADIS_appointed_as_Program_Managers_to_deliver_HSBCs_global_capital_expenditure_program.aspx",
    function () {
        var t = $(".news-info h1")[0].innerText.trim();
        var ps = cs.scanForDate($(".news-info h2")[0].innerText.trim(), "MM/dd/yyyy").replace(/\//g, '-');
        $(".news-info h1, .news-info h2, .news-info a").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".news-info")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);