/* Moving from -> Corporate Press Releases/Netherlands Seafox_list.js */ 
// Netherlands
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.workfox.com/en/news/Press-releases/Seafox-appoints-Erwin-Hoogeveen-as-Chief-Human-Resource-Officer/e/pm/10/",
    function(){
        var t = $(".wrapperContent h1")[0].innerText.trim();
        var ps = $(".wrapperContent .datum")[0].innerText.trim();
        $(".wrapperContent h1, .wrapperContent img, .wrapperContent .datum, .wrapperContent .blockClear").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".wrapperContent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);