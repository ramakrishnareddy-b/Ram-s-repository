//http://www.bwoffshore.com/media/press-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.bwoffshore.com/media/press-releases/"], function () {
    var urls = [];
    $(".filter tr[data-year='" + $(".nav-filter .active")[0].innerText + "'] a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});