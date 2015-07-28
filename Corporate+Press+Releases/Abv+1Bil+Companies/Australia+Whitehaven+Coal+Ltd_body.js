/* Moving from -> Corporate Press Releases/Australia Whitehaven Coal Ltd_list.js */ 
// Whitehaven Coal Ltd
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.whitehavennews.com.au/baml-global-metals-mining-and-steel-conference-presentation/",
    function(){
        jQuery(".content-box .entry-meta .textcolor").remove();
        return {
            title: jQuery(".content-box h1.entry-title")[0].innerText.trim(),
            published_s: jQuery(".content-box .entry-meta .col-md-6")[0].innerText.trim(),
            body: jQuery(".content-box .entry-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);