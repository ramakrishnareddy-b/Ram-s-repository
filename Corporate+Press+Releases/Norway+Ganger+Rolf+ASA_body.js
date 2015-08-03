// Ganger Rolf ASA
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ganger-rolf.com/press-release?SelectedRelease=http://publish.ne.cision.com/Release/GetDetail/2348AEECABE97F4F",
    function () {
        var t = $(".threeColumnCenter h1")[0].innerText.trim();
        var urls = [];
        $(".threeColumnCenter .reprotFilesDetails a").each(function (idx, el) {
            urls.push(el.href);
        });
        $(".threeColumnCenter h1, .threeColumnCenter .reprotFilesDetails").remove();
        var b = $(".threeColumnCenter")[0].innerText.trim();
        $(".threeColumnCenter p").remove();
        var ps = $(".threeColumnCenter")[0].innerText.trim();
        b.replace(ps, "");
        return {
            title: t,
            published_s: ps.replace(/\//g,'-'),
            body: b,
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);