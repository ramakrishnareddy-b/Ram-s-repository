/* Moving from -> Corporate Press Releases/Netherlands Mammoet _list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mammoet.com/en/News/2nd-Methanex-plant-relocation/",
    function () {
        var t = $(".newstitle h1")[0].innerText.trim();
        var ps = $(".newstitle .date")[0].innerText.trim();
        $(".content .newstitle, .content .overview-btn-wide, .content .breadcrumb, .content img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);