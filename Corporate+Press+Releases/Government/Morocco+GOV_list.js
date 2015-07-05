//http://www.pm.gov.ma/fr/section.1.Nouveautés
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.pm.gov.ma/fr/section.1.Nouveautés"], function () {
    var urls = [];
    $("#mybodydetails .body_news_activites_large h1 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});