// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.jandenul.com/en/pressroom/press-releases/panama-locks-filled-with-water",
    function () {
        var t = jQuery('.region-content-inner h1')[0].innerText.trim();
        var ps = jQuery('.field-items .field-item')[0].innerText.trim();
        jQuery(".region-content-inner h1, .region-content-inner .breadcrumb, .region-content-inner .field-items a, .region-content-inner .field-items img, .region-content-inner .field-items .addthis_toolbox, .region-content-inner .field-items .addthis_toolbox").remove();
        var b = jQuery(".region-content-inner")[0].innerText.trim().replace(ps, '');
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);