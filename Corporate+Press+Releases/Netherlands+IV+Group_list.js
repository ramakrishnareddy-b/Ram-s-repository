//http://www.iv-oil-gas.nl/en-US/Nieuws
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.iv-oil-gas.nl/en-US/Nieuws"], function () {
    var urls = [];
    jQuery('.news-item .news-readmore a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});
