//http://trinidaddrilling.mediaroom.com/index.php?s=22496
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://trinidaddrilling.mediaroom.com/index.php?s=22496"], function () {
    var urls = [];
    $(".spintable a.itemlink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});