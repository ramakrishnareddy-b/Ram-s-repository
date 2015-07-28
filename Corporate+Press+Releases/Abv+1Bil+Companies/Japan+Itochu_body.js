/* Moving from -> Corporate Press Releases/Japan Itochu_list.js */ 
// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.itochuoil.co.jp/e/news/20141025.html",
    function () {
        var ps = $(".inr .inr-pc .tar")[0].innerText.trim().replace(/\./g,'-');
        $(".inr .inr-pc .tar, .inr .inr-pc img").remove();
        return {
            title: $(".inr h2.ttl-1")[0].innerText.trim(),
            published_s: ps,
            body: $(".inr .inr-pc")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);