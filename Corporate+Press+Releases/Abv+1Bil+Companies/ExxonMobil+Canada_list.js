/* Moving from -> Corporate Press Releases/ExxonMobil Canada_list.js */ 
//http://news.exxonmobil.com/
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://news.exxonmobil.com/"],function(){
    var urls =[];
    $('.content-item .field-content a').each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});