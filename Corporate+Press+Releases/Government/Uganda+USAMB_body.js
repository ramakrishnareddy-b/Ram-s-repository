// Uganda
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://kampala.usembassy.gov/pr_12202014.html",
    function () {
        return {
            title: $(".middle-article .page-title")[0].innerText,
            body: $(".middle-article .middle-content-article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);