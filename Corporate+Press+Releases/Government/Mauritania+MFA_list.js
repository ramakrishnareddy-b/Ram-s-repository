//http://www.diplomatie-mr.com/maec/site/index.php?lang=fr
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.diplomatie-mr.com/maec/site/index.php?lang=fr"],function(){
    var urls =[];
    jQuery(".blog .art-post h2 a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});