// Trinidad and Tobago
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://trinidad.usembassy.gov/warner.html",
    function () {
        var t = $(".middle-content-article h1")[0].innerText.trim();
        $(".middle-content-article h1, .middle-content-article .image-enlarge").remove();
        return {
            title: t,
            body: $(".middle-content-article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);