// Mongolia
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.president.mn/eng/newsCenter/viewNews.php?newsId=1631",
    function(){
        return {
            title: $("#newsTitle")[0].innerText.trim(),
            published_s: $("#newsDate")[0].innerText.trim(),
            body: jQuery("#newsBody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);