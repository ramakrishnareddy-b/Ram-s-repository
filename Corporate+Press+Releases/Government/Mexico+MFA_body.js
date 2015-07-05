// Mexico
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://en.sre.gob.mx/index.php/archived-press-releases/3230-mexico-welcomes-the-restoration-of-diplomatic-relations-between-cuba-and-the-united-states",
    function () {
        return {
            title: $(".contentpaneopen .contentheading")[0].innerText,
            body: $(".contentpaneopen p").text(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);