//http://www.president.mn/eng/newsCenter/index.php
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.president.mn/eng/newsCenter/index.php"],function(){
    var urls =[];
    $("ul#latestNews li.title a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});