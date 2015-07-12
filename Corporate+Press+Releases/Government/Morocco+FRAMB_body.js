// Morocco
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ambafrance-ma.org/COP21-Forum-de-jeunes-franco-germano-marocains-Prends-ta-planete-en-main",
    function () {
        return {
            title: $('#main .title')[0].innerText,
            published_s: $("#main .timestamp")[0].innerText.split(":")[1].replace(/\//g,'-'),
            body: $('#main .inner .texte')[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);