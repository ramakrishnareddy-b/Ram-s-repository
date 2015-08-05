//http://www.parkerdrilling.com/newsroom.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.parkerdrilling.com/newsroom.aspx"], function () {
    var urls = [];
    $("#newsreleases a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});