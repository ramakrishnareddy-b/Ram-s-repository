//http://www.sandfire.com.au/investor/asx-announcements/2015.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.sandfire.com.au/investor/asx-announcements/2015.html"], function () {
    var urls = [];
    $(".announcement-table tr").each(function (idx, el) {
        var anc = $(el).find(".announcement-document a")[0];
        if (anc != null) {
            var published_dt = $(el).find(".announcement-date")[0].innerText.trim().replace(/\//g, '-');
            if (published_dt != '0') {
                var obj = {link: anc.href, title: anc.innerText.trim(), published_s: published_dt, content: 'pdf'};
                urls.push(obj);
            }
        }
    });
    return urls;
});