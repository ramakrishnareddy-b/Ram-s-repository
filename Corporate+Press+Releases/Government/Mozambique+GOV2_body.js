// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.funae.co.mz/index.php?option=com_content&view=article&id=578%3A2015-07-06-13-24-13&catid=43%3Anoticias&Itemid=41&lang=en",
    function () {
        var t = $("#colunaesquerda .contentheading")[0].innerText.trim();
        var ps = cs.scanForDate($("#colunaesquerda .createdate")[0].innerText.trim(), "dd MMMM yyyy HH:mm");
        $("#colunaesquerda .contentheading, #colunaesquerda .buttonheading, #colunaesquerda .createdate, #colunaesquerda #pathway, #colunaesquerda img").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#colunaesquerda")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);