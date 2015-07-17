//http://www.arcadis.com/press_releases.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.arcadis.com/press_releases.aspx"], function () {
    var urls = [];
    $(".rgMasterTable #ListItemLink a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});