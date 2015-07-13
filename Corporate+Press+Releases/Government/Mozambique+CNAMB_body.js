// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mz.china-embassy.org/por/xwdt/t1272485.htm",
    function () {
        var t = $("#article .bigtitlee")[0].innerText.trim();
        var ps = $("#article font")[0].innerText.replace(/\//g,"-").trim();
        $("#article .bigtitlee, #article font").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);