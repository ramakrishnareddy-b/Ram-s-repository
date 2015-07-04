// Peru
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.pcm.gob.pe/2015/04/comunicado/",
    function () {
        return {
            title: jQuery(".postarea h1").text().trim(),
            published_s: jQuery(".postarea .align-left").text().trim(),
            body: jQuery(".postarea [style='text-align: justify;']").text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);