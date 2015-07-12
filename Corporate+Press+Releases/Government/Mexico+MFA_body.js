// Mexico
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://en.sre.gob.mx/index.php/archived-press-releases/3230-mexico-welcomes-the-restoration-of-diplomatic-relations-between-cuba-and-the-united-states",
    function () {
        var t = $(".contentpaneopen .contentheading")[0].innerText.trim();
        $(".contentpaneopen .contentheading").remove();
        return {
            title: t,
            body: $(".contentpaneopen")[1].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);