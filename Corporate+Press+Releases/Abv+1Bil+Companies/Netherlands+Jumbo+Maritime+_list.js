/* Moving from -> Corporate Press Releases/Netherlands Jumbo Maritime _list.js */ 
//https://www.jumbomaritime.nl/en/news/news-archive/
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["https://www.jumbomaritime.nl/en/news/news-archive/"],function(){
    var urls =[];
    jQuery('.cmp-project-block a').each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});