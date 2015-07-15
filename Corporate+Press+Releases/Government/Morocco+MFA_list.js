//https://www.diplomatie.ma/LeMinistère/M_ArchiveActualites.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.diplomatie.ma/LeMinistère/M_ArchiveActualites.aspx"], function () {
    var urls = [];
    $(".ModAdvancedArticlesSatelliteC a.lireaussi").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});