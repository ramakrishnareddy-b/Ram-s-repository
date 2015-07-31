//http://www.enerflex.com/Investors/index.php
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.enerflex.com/Investors/index.php"], function () {
    var urls = [];
    $(".lpPressReleases .newsTitle a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});