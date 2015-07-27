//http://www.essar.com/media.aspx?cont_id=+sDyubvY9c8=
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.essar.com/media.aspx?cont_id=+sDyubvY9c8="], function () {
    var urls = [];
    $(".bodytext .Mediabody_linkbold a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});