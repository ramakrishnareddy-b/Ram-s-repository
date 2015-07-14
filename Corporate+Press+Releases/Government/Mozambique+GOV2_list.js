//http://www.funae.co.mz/index.php?option=com_content&view=section&layout=blog&id=9&Itemid=41&lang=en
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.funae.co.mz/index.php?option=com_content&view=section&layout=blog&id=9&Itemid=41&lang=en"], function () {
    var urls = [];
    $(".article_column .readon").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});