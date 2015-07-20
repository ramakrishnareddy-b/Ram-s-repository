/* Moving from -> Corporate Press Releases/Kuwait Petroleum International_list.js */ 
//http://www.q8.com/content/our-news/Pages/Default.aspx
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.q8.com/content/our-news/Pages/Default.aspx"],function(){
    var urls =[];
    $("#column .item .link-item a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});