//http://www.energyandminerals.go.ug
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.energyandminerals.go.ug"], function () {
    var urls = [];
    jQuery(".block-layout-one > p > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});