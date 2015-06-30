// Hungary
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.kormany.hu/en/ministry-of-interior/news/refugee-camps-must-be-established-outside-the-eu",
    function(){
        var b = $("#Content");
        var t = $(".article-head h1").text();
        var ps = $(".article-head h4").text();
        jQuery(".article-head h1, .article-head h4, .fb-like, .article-tools, .media").remove();
        return {
            title:t,
            published_s: ps,
            body: b[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);