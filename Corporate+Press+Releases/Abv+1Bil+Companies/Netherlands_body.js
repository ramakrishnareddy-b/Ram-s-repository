/* Moving from -> Corporate Press Releases/Netherlands_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.hertel.com/news/news-detail/altrad-finalizes-acquisition-of-hertel-1.html",
    function () {
        var t = jQuery(".subcontent h1")[0].innerText.trim();
        var ps = jQuery(".subcontent .date")[0].innerText.trim();
        jQuery(".subcontent h1, .subcontent .date, .subcontent .share, .subcontent img, .subcontent figure").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".subcontent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);