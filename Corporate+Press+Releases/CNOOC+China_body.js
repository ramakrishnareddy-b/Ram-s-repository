// CNOOC
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.cnoocltd.com/art/2015/6/30/art_14041_2035001.html",
    function () {
        var t = $(".Introduction .title").text().trim();
        $(".Introduction .title").remove();
        return {
            title: t,
            body: $(".Introduction")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);