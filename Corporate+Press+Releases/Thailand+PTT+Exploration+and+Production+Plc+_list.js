//http://www.pttep.com/en/News-n-Media/Media%20Corner/Press%20Releases.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.pttep.com/en/News-n-Media/Media%20Corner/Press%20Releases.aspx"], function () {
    var urls = [];
    $(".box_ct2 a.one_ct2").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});