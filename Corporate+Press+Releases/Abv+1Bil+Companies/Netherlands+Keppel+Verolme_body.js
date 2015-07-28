/* Moving from -> Corporate Press Releases/Netherlands Keppel Verolme_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.energyboardroom.com/interviews/harold-linssen-managing-director-keppel-verolme-netherlands",
    function () {
        jQuery("article aside, article img").remove();
        return {
            title: jQuery("article h1")[0].innerText.trim(),
            published_s: jQuery("article .date")[0].innerText.trim().replace(/\./g,'-'),
            body: jQuery("article .pf-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);