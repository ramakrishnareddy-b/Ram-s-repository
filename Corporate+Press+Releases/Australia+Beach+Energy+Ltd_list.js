//http://www.beachenergy.com.au/irm/archive/media-releases.aspx?RID=403
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.beachenergy.com.au/irm/archive/media-releases.aspx?RID=403"], function () {
    var urls = [];
    $(".articles a.title").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});