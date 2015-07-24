// Semafo Inc
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.semafo.com/news-and-media/news-releases/news-releases-details/2015/Delineation-Drill-Results-at-SEMAFOs-Natougou-Match-Expectations/default.aspx",
    function(){
        $(".ModuleDetailsContainer .ModuleContainerInner .ModuleBody img").remove();
        return {
            title: $(".ModuleDetailsContainer .ModuleTitle")[0].innerText.trim(),
            published_s: $(".ModuleDetailsContainer .ModuleContainerInner .ModuleDateContainer .ModuleDate")[0].innerText.trim(),
            body: $(".ModuleDetailsContainer .ModuleContainerInner .ModuleBody")[0].innerText.trim(),
            links: $(".ModuleDetailsContainer .ModuleContainerInner .ModuleLinks a.ModuleFileLink").attr("href"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);