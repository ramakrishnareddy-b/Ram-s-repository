//http://www.keppelverolme.nl/en/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.keppelverolme.nl/en/news"], function () {
    var urls = [];
    jQuery(".region-content .view-content .lightbox-processed").remove();
    jQuery(".region-content .view-content a").each(function (idx, el) {
        if(urls.indexOf(el.href) == -1){
            urls.push(el.href);
        }
    });
    return urls;
});