/* Moving from -> Corporate Press Releases/Netherlands IV Group_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.iv-oil-gas.nl/en-US/Nieuws/De-bouw-van-de-nieuwe-spoorbrug-Muiderberg-vordert",
    function () {
        jQuery(".news-overview a, .news-overview img").remove();
        return {
            title: jQuery(".cnt-content h1")[0].innerText.trim(),
            body: jQuery(".news-overview")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);