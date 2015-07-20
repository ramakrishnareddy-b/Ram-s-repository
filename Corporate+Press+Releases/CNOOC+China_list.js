//http://www.cnoocltd.com/col/col14041/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.cnoocltd.com/col/col14041/index.html"], function () {
    var urls = [];
    $(".simple_pgContainer a.gszc").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});