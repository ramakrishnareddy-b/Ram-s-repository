// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://tulipoil.com/tulip-oils-subsidiary-rhein-petroleum-discovers-oil-in-southern-hessen-upper-rhine-valley-germany/?lang=en",
    function () {
        return {
            title: jQuery(".inner-content .post-title")[0].innerText.trim(),
            body: jQuery(".inner-content .post-entry")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);