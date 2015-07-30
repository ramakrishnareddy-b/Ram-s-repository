//http://www.boartlongyear.com/company/investors/announcements/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.boartlongyear.com/company/investors/announcements/"], function () {
    var urls = [];
    jQuery(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        if(urls.indexOf(e.href) == -1){
            urls.push(el.href);
        }
    });
    return urls;
});