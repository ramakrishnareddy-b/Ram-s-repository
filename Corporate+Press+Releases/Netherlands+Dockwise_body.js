// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.dockwise.com/readmore/pressrelease-37.html",
    function () {
        var t = $(".pressrelease h3")[0].innerText.trim();
        var ps = $(".pressrelease h5.publish-date")[0].innerText.trim();
        $(".pressrelease h3, .pressrelease h5, .pressrelease .navigation-overview").remove();
        return {
            title: t,
            published_s: ps,
            body: cs.textUpto($(".pressrelease")[0].innerText.trim(), "This press release can also be found on our website"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);