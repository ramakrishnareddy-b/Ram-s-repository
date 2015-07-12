// Trinidad and Tobago
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.energy.gov.tt/energy-minister-meets-with-senior-officials-from-landocean-energy-services-and-range-resources-ltd/",
    function () {
        return {
            title: $("#main .entry-title")[0].innerText.trim(),
            links: $("#main .entry-content a").attr("href"),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);