// Exco Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.excoresources.com/single-news-release.htm?regid=2067739",
    function () {
        var t = $("#mainRightContent h2")[0].innerText.trim();
        var ps = $("#mainRightContent h4")[0].innerText.trim();
        $("#mainRightContent h2, #mainRightContent h4").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#mainRightContent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);