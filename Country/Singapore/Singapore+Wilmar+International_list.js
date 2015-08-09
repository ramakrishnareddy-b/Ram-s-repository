//http://ir-media.wilmar-international.com/phoenix.zhtml?c=164878&p=irol-newsMedia&nyo=0

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://ir-media.wilmar-international.com/phoenix.zhtml?c=164878&p=irol-newsMedia&nyo=0"],function(){
        var urls =[];
        //if mutliple links with different selectors, use comma to put them in one jQuery selector.
        jQuery('a.ccbnTblLnk').each(function(idx,el){
            urls.push(el.href);
        });

        return urls;
});