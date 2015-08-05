// Xinjiang International Industry Co Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.xjgjsy.com/Html/xwzxnr.asp?ID=261&SortID=10",
    function () {
        var urls = [];
        $(".xuxian1 a[target='_blank']").each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            published_s: cs.scanForDate($(".xuxian1 font[color='999999']")[0].innerText.trim(), "yyyy-MM-dd"),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);