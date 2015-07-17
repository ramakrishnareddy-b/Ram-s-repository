// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.bigliftshipping.com/news/latest/biglift-shipping-joins-trident-alliance-",
    function () {
        var t = $(".content h1")[0].innerText.trim();
        var ps = cs.scanForDate($(".content .posted")[0].innerText.trim(), "dd MMMM yyyy");
        $(".content h1, .content .posted, .content img, .content a").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);