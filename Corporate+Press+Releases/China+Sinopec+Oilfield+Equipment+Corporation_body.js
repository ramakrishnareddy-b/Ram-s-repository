// Sinopec Oilfield Equipment Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kingdream.com/yw/news_infro.asp?ArtID=3146",
    function () {
        var t = $("table[style='margin-top:10px; margin-bottom:10px;'] .p4")[0].innerText.trim();
        $("table[style='margin-top:10px; margin-bottom:10px;'] .p4").remove();
        return {
            title: t,
            body: $("table[style='margin-top:10px; margin-bottom:10px;']")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);