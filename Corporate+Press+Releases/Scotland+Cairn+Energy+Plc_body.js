// Cairn Energy Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.cairnenergy.com/index.asp?pageid=27&newsid=477",
    function () {
        var t = $(".grid_6.alpha h2")[0].innerText.trim();
        var ps = $(".grid_6.alpha p:first")[0].innerText.trim();
        $(".grid_6.alpha h2, .grid_6.alpha p:first, .grid_6.alpha p:last, .grid_6.alpha .info").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".grid_6.alpha")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);