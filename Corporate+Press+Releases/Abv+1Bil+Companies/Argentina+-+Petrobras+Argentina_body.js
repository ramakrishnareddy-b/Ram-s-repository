/* Moving from -> Corporate Press Releases/Argentina - Petrobras Argentina_list.js */ 
// Petrobras Argentina
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.petrobras.com/es/paises/argentina/noticias/petrobras-sumo-un-nuevo-lubricante-al-mercado-lubrax-gas-ldi-40.htm",
    function () {
        $(".article .article-content i, .article .article-content img").remove();
        return {
            title: $(".article .title-2").text().trim(),
            published_s: $(".article small")[0].innerText.trim().replace(/\//g,'-'),
            body: $(".article .article-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);