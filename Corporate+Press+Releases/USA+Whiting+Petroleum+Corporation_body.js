// Whiting Petroleum Corporation
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=147759&p=irol-newsArticle&ID=2072331",
    function(){
        var t = jQuery("#investor .ccbnTtl")[0].innerText.trim();
        var b = jQuery("#investor .ccbnTxt")[0].innerText.trim();
        var ps =  cs.scanForDate(b.replace(/\./g,''), "MMM dd, yyyy");
        return {
            title: t,
            published_s: ps,
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);