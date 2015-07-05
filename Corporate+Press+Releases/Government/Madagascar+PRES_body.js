// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.presidence.gov.mg/appel-a-vigilance-face-aux-usurpateurs/",
    function () {
        return {
            title: jQuery("#content .entry-title")[0].innerText,
            body: jQuery("#content .entry-content p").text(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);