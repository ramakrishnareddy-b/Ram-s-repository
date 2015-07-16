// Kuwait
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.knpc.com.kw/en/MediaCentre/News/Pages/SKY-Second-Presentation.aspx",
    function(){
        var t = $(".newscontent .GrayTitleBig")[0].innerText.trim();
        $(".newscontent .GrayTitleBig").remove();
        return {
            title: t,
            body: $(".newscontent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);