// EnLink Midstream Partners LP
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://enlk.enlink.com/investor/investor-news/investor-news-details/2015/EnLink-Midstream-Reports-Second-Quarter-2015-Results/default.aspx",
    function () {
        var urls = [];
        $(".ModuleContainer .ModuleLinks a").each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            title: $(".ModuleContainer h1")[0].innerText.trim(),
            published_s: $(".ModuleContainer .ModuleDate")[0].innerText.trim().replace(/\//g,'-'),
            body: $(".ModuleContainer .ModuleBody")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);