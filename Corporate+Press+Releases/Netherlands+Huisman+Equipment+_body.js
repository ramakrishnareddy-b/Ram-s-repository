// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.huismanequipment.com/en/news/news_archive/news_item/85/Huisman-holds-steel-cutting-ceremony-for-Heerema-s-10-000mt-Tub-Mounted-Cranes",
    function () {
        var t = $(".whitespace h1")[0].innerText.trim();
        $(".whitespace h1").remove();
        var ps = cs.scanForDate($(".whitespace")[0].innerText.trim(), "MMMM dd, yyyy");
        return {
            title: t,
            published_s: ps,
            body: $(".whitespace")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);