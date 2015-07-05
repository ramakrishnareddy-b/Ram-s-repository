// Morocco
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.pm.gov.ma/fr/details.1.603.Signature+par+le+Maroc+du+programme+pays+avec+l%E2%80%99OCDE",
    function () {
        return {
            title: $("#details_articles h2")[0].innerText,
            published_s: $("#details_articles h5")[0].innerText,
            body: $("#details_articles p").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);