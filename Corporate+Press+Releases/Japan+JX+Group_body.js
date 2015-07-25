// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.noe.jx-group.co.jp/english/press/2015/20150421_01.html",
    function () {
        var t = $("#mainContents .heading06")[0].innerText.trim();
        var ps = $("#mainContents .tx02.mt20")[0].innerText.trim();
        $("#mainContents .heading01, #mainContents .heading03, #mainContents .heading06, #mainContents .tx02").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#mainContents")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);