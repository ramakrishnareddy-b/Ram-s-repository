//http://ir.chartnexus.com/bengkuangmarine/announcement.php
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://ir.chartnexus.com/bengkuangmarine/announcement.php"],function(){
    var urls =[];
    $(".dpcontent .eventseven_m[style='display:none;'], .dpcontent .eventsodd_m[style='display:none;']").remove();
    $(".dpcontent .eventseven_m, .dpcontent .eventsodd_m").each(function (idx, el) {
        var published_dt = $(el).find(".annfull table").text().trim().replace(/\|/g, '');
        var anc = $(el).find("a")[0];
        if(anc != null) {
            var obj={link:anc.href,title:$(el).find(".annfull p")[0].innerText.trim(),published_s:published_dt,content:'pdf'};
            urls.push(obj);
        }
    });

    return urls;
});