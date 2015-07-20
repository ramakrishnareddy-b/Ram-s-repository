/* Moving from -> Corporate Press Releases/Kuwait Petrochemical Industries Co_list.js */ 
// Kuwait
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.pic.com.kw/newsarticle00021.html",
    function(){
        $(".inner_content_container_without_box #lblContents img").remove();
        return {
            title: $(".inner_content_container_without_box .page_title")[0].innerText.trim(),
            body: $(".inner_content_container_without_box #lblContents")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);