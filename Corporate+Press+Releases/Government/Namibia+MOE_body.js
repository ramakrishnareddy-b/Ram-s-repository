// Namibia
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mme.gov.na/news/37/Ohorongo-donates-cement-to-all-regions",
    function () {
        return {
            title: jQuery("#id_passed #page_title").text().trim(),
            published_s: jQuery("#id_passed .small2").text().trim(),
            body: jQuery("#id_passed .center_content p").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);