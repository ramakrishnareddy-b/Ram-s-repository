// PDC Energy Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investor.pdce.com/releasedetail.cfm?ReleaseID=921572",
    function () {
        var t = $("#wsh_middle h1")[0].innerText.trim();
        var ps = $("#wsh_middle .wsh_printDate")[0].innerText.trim();
        $("#wsh_middle h1, #wsh_middle .wsh_printDate, #wsh_middle .wsh_prinertOff").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#wsh_middle")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);