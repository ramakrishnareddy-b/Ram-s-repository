//http://www.atlanticnavigation.com/#!ir-news-all/cvuk
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.atlanticnavigation.com/#!ir-news-all/cvuk"],function(){
    var urls =[];
    $(".s12inlineContent .flex_vbox[style='position:relative;display:block;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;']").each(function (idx, el) {
        var published_dt = $(el).find(".color_3").text();
        $(el).find("a").each(function(idx1, el1) {
            if(published_dt != null) {
                var obj={link:el1.href,title:$(el1).text().trim(),published_s:published_dt,content:'pdf'};
                urls.push(obj);
            }
        });
    });

    return urls;
});