// Bristow Group Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://bristowgroup.com/bristow-news/latest-news/2015/bristow-group-inc-announces-redemption-its-300-con/",
    function () {
        var t = $(".single-article hgroup h1")[0].innerText.trim();
        var ps = $(".single-article hgroup h2")[0].innerText.trim();
        $(".single-article hgroup").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".single-article")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);