/* Moving from -> Corporate Press Releases/Japan Showa Shell Sekiyu _list.js */ 
// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.showa-shell.co.jp/english/press_release/pr2015/0723.html",
    function () {
        var t = $(".pageheader h1")[0].innerText.trim();
        var ps = $(".pageheader .pr_en .date")[0].innerText.trim().replace(/\//g,'-');
        var l = $(".pageheader .pr_en a").attr("href");
        $(".pageheader .pr_en .date, .pageheader .pr_en a").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".pageheader .pr_en")[0].innerText.trim(),
            link: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);