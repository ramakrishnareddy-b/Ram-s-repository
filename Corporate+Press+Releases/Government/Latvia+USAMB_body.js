// Latvia
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://riga.usembassy.gov/pr_20150630_en.html",
    function () {
        $("#middle-content-article .caption").remove();
        return {
            title: $("#middle-content-article h1")[0].innerText,
            published_s: $("#middle-content-article h6")[0].innerText.replace("Riga, ", ""),
            body: $("#middle-content-article p").text(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);