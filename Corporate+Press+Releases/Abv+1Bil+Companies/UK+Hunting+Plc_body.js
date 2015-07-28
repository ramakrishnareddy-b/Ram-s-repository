/* Moving from -> Corporate Press Releases/UK Hunting Plc_list.js */ 
// Hunting Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.huntingplc.com/media/press-releases/2015/13-05-2015.aspx",
    function () {
        var t = jQuery("#Text h1")[0].innerText.trim();
        jQuery("#Text h1, #Text img").remove();
        var b = jQuery("#Text")[0].innerText.trim();
        return {
            title: t,
            published_s: cs.scanForDate(b,"MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);