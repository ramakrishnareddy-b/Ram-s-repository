//http://mof-krg.org/?page=category&c=news&activities
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://mof-krg.org/?page=category&c=news&activities"], function () {
    var urls = [];
    $(".panel-body .media .media-heading a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});