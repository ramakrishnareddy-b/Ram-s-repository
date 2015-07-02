//http://www.gina.gov.gy/home/

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.gina.gov.gy/home/"],function(){
    var urls =[];
    jQuery(".yjsquare .yjme_holder .item_title").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});