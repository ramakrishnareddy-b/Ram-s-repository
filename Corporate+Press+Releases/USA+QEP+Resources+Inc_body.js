// QEP Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.qepres.com/investors/news-releases/news-release-details/2015/QEP-Resources-Inc-Declares-Quarterly-Cash-Dividend-7272015/default.aspx",
    function () {
        return {
            title: $(".ModuleDetailsContainer .ModuleTitleText")[0].innerText.trim(),
            published_s: $(".ModuleDetailsContainer .ModuleDate")[0].innerText.trim(),
            body: $(".ModuleDetailsContainer .ModuleBody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);