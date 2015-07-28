/* Moving from -> Corporate Press Releases/Kazakhstan Kazmunaigas Explora-gdr Regs_list.js */ 
// Kazmunaigas Explora-gdr Regs
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kmg.kz/en/press/company_news/press_release/11231#.VbOiLfmqqko",
    function () {
        var t = $(".news-detail h3")[0].innerText.trim();
        var ps = $(".news-detail .news-date-time")[0].innerText.trim().replace(/\./g,'-');
        $(".news-detail h3, .news-detail .news-date-time").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".news-detail")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);