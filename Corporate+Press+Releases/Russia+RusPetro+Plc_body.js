// RusPetro Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ruspetro.com/media/company-news/2015/06/09/agm-presentation-2015/index.html",
    function () {
        var urls = [];
        $("#mainContent ul a").each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            title: $("#mainContent .news-header h1")[0].innerText.trim(),
            published_s: $("#mainContent p")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);