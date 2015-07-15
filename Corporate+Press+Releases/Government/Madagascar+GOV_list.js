//http://www.mprs.gov.mg/?p=524
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.mprs.gov.mg/?p=524"],function(){
    var urls =[];
    jQuery("#recent-posts-3 > ul > li > a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});