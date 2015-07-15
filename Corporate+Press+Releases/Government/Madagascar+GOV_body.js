// Madagascar
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.mprs.gov.mg/?p=549",
    function(){
        jQuery("#content .entry img").remove();
        return {
            title: jQuery("#content h2.title")[0].innerText.trim(),
            published_s: jQuery("#content .meta_date")[0].innerText.trim(),
            body: jQuery("#content .entry")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);