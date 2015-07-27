// Chart Industries Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.chartindustries.com/News-Events/News/Going-Full-Circle-at-Chart-Industries,-Inc",
    function () {
        var urls = [];
        $(".column-right .main-content a").each(function (idx, el) {
            urls.push(el.href);
        });
        $(".column-right .main-content a, .column-right .main-content img").remove();
        return {
            title: $(".column-right h2")[0].innerText.trim(),
            published_s: $(".column-right .date")[0].innerText.trim(),
            body: $(".column-right .main-content")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);