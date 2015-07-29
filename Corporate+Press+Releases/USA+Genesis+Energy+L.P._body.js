// Genesis Energy L.P.
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.genesisenergy.com/index.cfm?md=newsroom&tmp=detail&aid=227",
    function () {
        var t = $("#mainCol h3")[0].innerText.trim();
        var ps = cs.scanForDate($("#mainCol .indexDate")[0].innerText.trim(), "MMMM dd, yyyy");
        $("#mainCol h3, #mainCol .indexDate, #mainCol #phtHdrGeneric").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#mainCol")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);