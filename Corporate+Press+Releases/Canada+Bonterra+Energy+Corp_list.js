//http://bonterraenergy.mwnewsroom.com/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://bonterraenergy.mwnewsroom.com/"], function () {
    var urls = [];
    jQuery(".text a[target='_new']").remove();
    jQuery(".text a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});