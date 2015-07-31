// Bonterra Energy Corp
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://bonterraenergy.mwnewsroom.com/press-releases/bonterra-energy-corp-announces-closing-of-31-million-private-placement-tsx-bne-201507081016089001",
    function () {
        var b = jQuery(".content .mw_release")[0].innerText.trim();
        jQuery(".content .mw_release").remove();
        return {
            title: jQuery(".content h3")[0].innerText.trim(),
            published_s: jQuery(".content p strong")[0].innerText.trim(),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);