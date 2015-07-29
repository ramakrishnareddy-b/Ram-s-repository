// Cobalt International Energy
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.cobaltintl.com/newsroom/cobalt-international-energy-inc.-announces-timing-of-second-quarter-2015-fi",
    function () {
        var b = $("#content .press_releases")[0].innerText.trim();
        return {
            title: $("#content h1")[0].innerText.trim(),
            published_s: cs.scanForDate(b.replace(/\./g,''), "MMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);