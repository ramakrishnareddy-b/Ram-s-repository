/* Moving from -> Corporate Press Releases/Norway Det Norske Oljeselskap ASA_list.js */ 
// Det Norske Oljeselskap ASA
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.detnor.no/en/second-quarter-results-2015/",
    function () {
        var urls = [];
        jQuery(".type-post .entry-content .wrap-boks a").each(function (idx, el) {
            urls.push(el.href);
        });
        jQuery(".type-post .entry-content .wrap-boks, .type-post .entry-content a").remove();
        return {
            title: jQuery(".type-post .entry-title")[0].innerText.trim(),
            published_s: jQuery(".type-post .date")[0].innerText.trim().replace(/\./g,''),
            body: jQuery(".type-post .entry-content")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);
