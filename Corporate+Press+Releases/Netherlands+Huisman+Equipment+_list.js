//http://www.huismanequipment.com/en/news
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.huismanequipment.com/en/news"], function () {
    var urls = [];
    $(".nieuwsJaarOverzicht a.arrow").remove();
    $(".nieuwsJaarOverzicht a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});