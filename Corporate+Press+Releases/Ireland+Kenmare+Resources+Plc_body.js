// Kenmare Resources Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kenmareresources.com/media/press-releases/2015/news-item-050515.aspx",
    function () {
        var t = jQuery(".content-container h1")[0].innerText.trim();
        var ps = jQuery(".content-container p strong")[0].innerText.trim();
        jQuery(".content-container h1, .content-container p strong, .content-container .adobeTextContainer, .content-container a").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".content-container")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);