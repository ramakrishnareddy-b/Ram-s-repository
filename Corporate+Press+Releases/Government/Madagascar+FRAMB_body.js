// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ambafrance-mada.org/Documents-d-identite-et-de-voyage-1798",
    function () {
        return {
            title: $(".span9 .title, .block-article .title")[0].innerText.trim(),
            body: $(".span9 .texte, .block-article .texte")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);