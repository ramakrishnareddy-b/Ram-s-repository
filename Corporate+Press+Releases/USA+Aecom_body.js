// Aecom
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://aecom.com/News/_featuredStories/Janet+C.+Wolfenbarger+to+Join+AECOM+Board+of+Directors",
    function () {
        var t = $("#siabcontentbody #titleDiv h1")[0].innerText.trim();
        var ps = $("#siabcontentbody #titleDiv h5")[0].innerText.trim();
        $("#siabcontentbody #titleDiv").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#siabcontentbody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);