// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.presidence.gov.mg/appel-a-vigilance-face-aux-usurpateurs/",
    function () {
        jQuery("#content .entry-content .crafty-social-buttons").remove();
        return {
            title: jQuery("#content .entry-title")[0].innerText,
            body: jQuery("#content .entry-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);