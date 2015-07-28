/* Moving from -> Corporate Press Releases/Rosneft Russia_list.js */ 
// Rosneft
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.rosneft.com/news/pressrelease/14072015.html",
    function () {
        var t = $("p td.text .news")[0].innerText.trim();
        var ps = $("p td.text #mb09")[0].innerText.trim();
        $("p td.text #mb09, p td.text .news, p td.text #mb12").remove();
        return {
            title: t,
            published_s: ps,
            body: $("p td.text")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);