// Kurdistan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mtikrg.org/Default.aspx?page=article&id=1707&l=3",
    function () {
        var t = $("#article .article_page_title")[0].innerText;
        var ps = $("#article #ctl08_DataList2_ctl00_articledateLabel")[0].innerText.replace(/\//g, '-');
        $("#article .addthis_toolbox, #article .article_blue, #article .article_page_title").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#article")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);