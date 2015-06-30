// Iceland
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.mfa.is/news-and-publications/nr/8415",
    function(){
        var b = jQuery(".article .boxbody");
        var t = jQuery("h1").text();
        var ps = jQuery(".date").text().replace(/\./g,'-');
        jQuery("h1, .date, .buttons, .imgbox").remove();
        return {
            title:t,
            published_s: ps,
            body: b[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);