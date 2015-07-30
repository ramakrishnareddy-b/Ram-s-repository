//http://www.whiting.com/investor-relations/press-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.whiting.com/investor-relations/press-releases/"], function () {
    var urls = [];
    jQuery(".ccbnOutline a[target='_blank']").remove();
    jQuery(".ccbnOutline a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});