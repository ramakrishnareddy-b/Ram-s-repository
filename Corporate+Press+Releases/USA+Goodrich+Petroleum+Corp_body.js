// Goodrich Petroleum Corp
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://goodrichpetroleum.investorroom.com/2015-07-27-Goodrich-Petroleum-Corporation-Announces-Sale-Of-Proved-Reserves-And-Portion-Of-Leasehold-In-The-Eagle-Ford-Shale",
    function () {
        return {
            title: $(".wd_news_releases-detail .detail_header")[0].innerText.trim(),
            published_s: $(".wd_news_releases-detail .release_data")[0].innerText.trim(),
            body: $(".wd_news_releases-detail .news_body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);