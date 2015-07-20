/* Moving from -> Corporate Press Releases/Netherlands GustoMSC_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.gustomsc.com/index.php/separator-10464/separator/324-vestibulum-2",
    function () {
        var t = jQuery(".item .title")[0].innerText.trim();
        var l = window.location.protocol + "//" + window.location.host + jQuery(".item .doclink").attr("href");
        jQuery(".item .title, .item .doclink, .item img").remove();
        return {
            title: t,
            body: jQuery(".item")[0].innerText.trim(),
            links: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);