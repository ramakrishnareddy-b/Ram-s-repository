// Uganda
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mediacentre.go.ug/press-release/false-and-misleading-broadcasts",
    function () {
        return {
            title: jQuery("#main2 h1")[0].innerText.trim(),
            body: jQuery("#main2 .field-name-body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);