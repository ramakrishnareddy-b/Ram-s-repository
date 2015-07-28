/* Moving from -> Corporate Press Releases/Netherlands Oranje-Nassau Energie _list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.onebv.com/node/219",
    function () {
        return {
            title: jQuery("#page_mid h1")[0].innerText.trim(),
            published_s: cs.scanForDate(jQuery('.field-item p em')[0].innerText.trim(), "dd MMMM yyyy"),
            body: jQuery(".field-item ")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);