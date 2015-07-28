/* Moving from -> Corporate Press Releases/Cyprus Ocean Rig UDW Inc_list.js */ 
//http://ocean-rig.irwebpage.com/NEW.press_releases.html
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://ocean-rig.irwebpage.com/NEW.press_releases.html"],function(){
    var urls =[];
    $(".category-main-content-left a[target='PDF']").remove();
    $(".category-main-content-left a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});