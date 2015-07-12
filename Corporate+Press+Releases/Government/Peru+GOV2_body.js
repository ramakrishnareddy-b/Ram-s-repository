// Peru
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.pcm.gob.pe/2015/04/comunicado/",
    function () {
        var t = jQuery(".postarea h1")[0].innerText;
        var ps = jQuery(".postarea .align-left")[0].innerText.replace("Publicado en ", "").trim();
        jQuery(".postarea .headline, .postarea .post-author, .postarea .feature-img, .postarea .post-meta.radius-full, .postarea .post-navigation").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery(".postarea")[0].innerText,
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);