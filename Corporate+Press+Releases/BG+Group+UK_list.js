//http://www.bg-group.com/18/media/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.bg-group.com/18/media/"], function () {
    var urls = [];
    $(".mediatile h3 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});