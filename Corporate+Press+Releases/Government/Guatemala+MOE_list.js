//http://www.mem.gob.gt/category/noticias/

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.mem.gob.gt/category/noticias/"],function(){
    var urls =[];
    $(".content p .vmas").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});