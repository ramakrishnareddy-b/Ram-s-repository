// OXY - Occidental Petroleum Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.oxy.com/News/Pages/Article.aspx?Article=5400.html",
    function () {
        var ps = $(".pane-node-date .pane-content")[0].innerText.trim();
        $(".pane-node-date").remove();
        return {
            title: $("#story h1")[0].innerText.trim(),
            published_s: ps,
            body: $("#story .panel-display")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);