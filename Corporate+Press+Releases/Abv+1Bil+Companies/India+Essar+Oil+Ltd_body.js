/* Moving from -> Corporate Press Releases/India Essar Oil Ltd_list.js */ 
// Essar Oil Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.essar.com/article.aspx?cont_id=9c0ndFWM6B8=",
    function () {
        return {
            title: $("#printarea .ArticleTitle")[0].innerText.trim(),
            published_s: $("#printarea .date")[0].innerText.trim(),
            body: $("#printarea #content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);