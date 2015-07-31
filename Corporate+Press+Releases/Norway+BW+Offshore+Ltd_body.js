// BW Offshore Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.bwoffshore.com/media/press-releases/imported-press-releases1/2015/bw-offshore-contract-extension-for-abo--/",
    function () {
        return {
            title: $(".article-wrapper h2.block-title")[0].innerText.trim(),
            published_s: $(".article-wrapper .published-date time")[0].innerText.trim().replace(/\./g,'-'),
            body: $(".article-wrapper .main-text")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);