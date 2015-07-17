// Netherland
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.gasunie.nl/en/news/gasunie-en-gazprom-willen-samen-inzet-van-lng-als-schoner-brandst",
    function () {
        return {
            title: jQuery("#main h1")[0].innerText.trim(),
            published_s: cs.scanForDate(jQuery("#main .geel")[0].innerText.trim(), "dd-MM-yyyy"),
            body: jQuery("#main .alinea")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);