/* Moving from -> Corporate Press Releases/Sinopec Corporation China_list.js */ 
// Sinopec
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.total.com/en/media/news/news/infographic-moho-nord-total-goes-local",
    function () {
        jQuery(".standard img").remove();
        return {
            title: jQuery(".standard .title")[0].innerText.trim(),
            published_s: jQuery(".standard .time")[0].innerText.trim(),
            body: jQuery(".standard .field-item")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);