//http://www.mfa.is/news-and-publications/

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.mfa.is/news-and-publications/"],function(){
    var urls =[];
    jQuery(".articlelist .boxbody h3 a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});