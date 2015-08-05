// Americas Petrogas Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://americaspetrogas.com/Newsstory-Detail.asp?StoryID=1597146#.VcF_LPmqqko",
    function () {
        var t = $("#right_border h1")[0].innerText.trim();
        $("#right_border h3 a").remove();
        var ps = $("#right_border h3")[0].innerText.trim().replace(/\//g, '-');
        $("#right_border h1, #right_border h3").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#right_border")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);