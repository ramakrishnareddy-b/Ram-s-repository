// Pacific Rubiales Energy Corporation
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://pacificrubiales.mediaroom.com/2015-07-20-Pacific-Rubiales-provides-notice-of-second-quarter-2015-financial-results-and-conference-call",
    function(){
        return {
            title: $(".wd_news_releases-detail .detail_header")[0].innerText.trim(),
            published_s: $(".wd_news_releases-detail .release_data")[0].innerText.trim(),
            body: $(".wd_news_releases-detail .news_body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);