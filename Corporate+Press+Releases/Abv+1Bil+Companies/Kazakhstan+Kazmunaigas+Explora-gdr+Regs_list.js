/* Moving from -> Corporate Press Releases/Kazakhstan Kazmunaigas Explora-gdr Regs_list.js */ 
//http://www.kmg.kz/en/press/company_news/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kmg.kz/en/press/company_news/"], function () {
    var urls = [];
    $(".news-list .news-item a").each(function (idx, el) {
        if(urls.indexOf(el.href) == -1) {
            urls.push(el.href);
        }
    });
    return urls;
});