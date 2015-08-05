// Linc Energy Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://lincenergy.listedcompany.com/news.html/id/481261",
    function () {
        $("#centre-col .si_marginBottom .si_floatRight").remove();
        var urls = [];
        jQuery('#centre-col ol li a').each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            title: $("#centre-col h2")[0].innerText.trim(),
            published_s: $("#centre-col .si_marginBottom")[0].innerText.trim(),
            body: $("#centre-col .ir_table")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);