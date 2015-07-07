// Kurdistan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mof-krg.org/Default.aspx?page=article&id=1498&l=3",
    function () {
        return {
            title: $(".panel .panel-title")[0].innerText,
            body: $(".panel .panel-body")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);