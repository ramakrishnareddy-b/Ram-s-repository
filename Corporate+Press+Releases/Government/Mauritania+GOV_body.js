// Mauritania
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.primature.gov.mr/fr/index.php?link=1&id=1491",
    function () {
        var t_ps = $(".mytext2 strong").text().split("Nouakchott, ");
        var t = t_ps[0].trim();
        var ps = t_ps[1].replace(/\//g, "-").replace(" - ", "");
        $(".mytext2 strong, .mytext2 img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".mytext2")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);