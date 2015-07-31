// Contango Oil & Gas Co
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.contango.com/releasedetail.cfm?ReleaseID=924466",
    function () {
        $(".wsh_prinertOff").remove();
        var t = $(".wsh_printContainer h1")[0].innerText.trim();
        var ps = $(".wsh_printContainer .wsh_printDate")[0].innerText.trim();
        $(".wsh_printContainer .wsh_printDate, .wsh_printContainer h1, .wsh_printContainer #iconMenuPrint").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".wsh_printContainer")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);