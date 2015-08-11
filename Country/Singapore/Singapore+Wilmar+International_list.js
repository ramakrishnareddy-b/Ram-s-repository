//http://ir-media.wilmar-international.com/phoenix.zhtml?c=164878&p=irol-newsMedia&nyo=0
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://ir-media.wilmar-international.com/phoenix.zhtml?c=164878&p=irol-newsMedia&nyo=0"],function(){
    var urls =[];
    $(".ccbnOutline .ccbnBgTblOdd, .ccbnOutline .ccbnBgTblEven").each(function (idx, el) {
        var published_dt = $(el).find("td[nowrap='nowrap']").text().trim();
        var anc = $(el).find(".ccbnTblLnk")[0];
        var obj={link:anc.href,title:anc.innerText.trim(),published_s:published_dt,content:'pdf'};
        urls.push(obj);
    });

    return urls;
});