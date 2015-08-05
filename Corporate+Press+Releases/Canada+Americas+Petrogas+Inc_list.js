//http://americaspetrogas.com/news.asp#.VbYBnfmqqko

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://americaspetrogas.com/news.asp#.VbYBnfmqqko"], function () {
    var urls = [];
    $("#right_border ul a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});