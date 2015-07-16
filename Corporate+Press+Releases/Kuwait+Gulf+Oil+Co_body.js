// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kgoc.com/Pages/News/Newsgifts.aspx",
    function () {
        return {
            title: $("#inner_body > h2")[0].innerText.trim(),
            published_s: $("#inner_body > h3")[0].innerText.trim().replace(/\//g, '-'),
            body: $("#inner_body > .ms-rtestate-field")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);