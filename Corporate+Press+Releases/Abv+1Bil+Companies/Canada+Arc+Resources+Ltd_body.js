/* Moving from -> Corporate Press Releases/Canada Arc Resources Ltd_list.js */ 
// Arc Resources Ltd
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://arcresources.mediaroom.com/2015-07-16-ARC-Resources-Ltd-Confirms-August-17-2015-Dividend-Amount",
    function(){
        return {
            title: $(".wd_news_releases-detail h1.detail_header")[0].innerText.trim(),
            published_s: $(".wd_news_releases-detail .release_data")[0].innerText.trim(),
            body: $(".wd_news_releases-detail .news_body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);