//http://www.mofa.go.ug/data/dnews/168/Uganda%20Signs%20an%20Inter%20Governmental%20Commission%20on%20Economic,%20Scientific%20and%20Technical%20Cooperation%20With%20Russia.html
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.mofa.go.ug/data/dnews/168/Uganda%20Signs%20an%20Inter%20Governmental%20Commission%20on%20Economic,%20Scientific%20and%20Technical%20Cooperation%20With%20Russia.html"],function(){
    var urls =[];
    $(".publications_holder > h2 > a, #sub_news .pubdiscription > h2 > a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});