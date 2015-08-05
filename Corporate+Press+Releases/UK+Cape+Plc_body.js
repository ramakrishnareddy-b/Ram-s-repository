// Cape Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.capeplc.com/news-and-media/news-announcements/2015/08/meet-cape-at-offshore-europe.aspx",
    function () {
        var t = $(".grid_66 h1").text().trim();
        var ps = $(".grid_66 p:first")[0].innerText.trim();
        $(".grid_66 h1, .grid_66 p:first").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".grid_66")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);