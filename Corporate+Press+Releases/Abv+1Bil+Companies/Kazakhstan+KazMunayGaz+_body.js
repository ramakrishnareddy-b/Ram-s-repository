/* Moving from -> Corporate Press Releases/Kazakhstan KazMunayGaz _list.js */ 
// Kazakhstan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.azskmg.kz/2292-news",
    function () {
        return {
            title: jQuery(".fullstory-inner")[0].innerText.trim(),
            published_s: jQuery(".fullstory-inner .date")[0].innerText.trim(),
            body: jQuery(".fullstory-inner article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);