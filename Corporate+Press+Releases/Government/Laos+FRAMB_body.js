// Laos
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ambafrance-laos.org/Appel-a-communications",
    function () {
        return {
            title: $(".block-page .head h1")[0].innerText,
            published_s: $(".block-page .timestamp")[0].innerText.split(" : ")[1].replace(/\//g,'-'),
            body: $(".block-page .inner .surlignable").text().trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);