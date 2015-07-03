//http://www.presidence.gov.gn/
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.presidence.gov.gn/"],function(){
    var urls =[];
    jQuery("._PROFILE h4 a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});