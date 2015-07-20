/* Moving from -> Corporate Press Releases/Netherlands Gasunie_list.js */ 
// Netherland
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.gasunie.nl/en/news/gasunie-en-gazprom-willen-samen-inzet-van-lng-als-schoner-brandst",
    function () {
        var t = jQuery("#main h1")[0].innerText.trim();
        var ps = cs.scanForDate(jQuery("#main .geel")[0].innerText.trim(), "dd-MM-yyyy");
        jQuery("#main h1, #main .geel, #main .sharethis").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery("#main")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);