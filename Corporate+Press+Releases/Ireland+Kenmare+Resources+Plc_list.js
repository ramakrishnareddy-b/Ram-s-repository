//http://www.kenmareresources.com/media/press-releases/2015.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kenmareresources.com/media/press-releases/2015.aspx"], function () {
    var urls = [];
    jQuery(".content-container .tabmenucontainer").remove();
    jQuery(".content-container a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});