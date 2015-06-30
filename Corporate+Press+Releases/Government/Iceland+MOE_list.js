//links to extract from this website.
//http://www.nea.is/the-national-energy-authority/news/

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.nea.is/the-national-energy-authority/news/"],function(){
    var urls =[];
    jQuery(".articlelist a.atitle, .articlelist ul a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});
