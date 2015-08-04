//http://www.ruspetro.com/media/index.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ruspetro.com/media/index.html"], function () {
    var urls = [];
    $("#presslist li[style='display: none;']").remove();
    $("#presslist .newspagetitle a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});