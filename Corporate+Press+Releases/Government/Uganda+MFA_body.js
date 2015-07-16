// Uganda
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.mofa.go.ug/data/dnews/168/Uganda%20Signs%20an%20Inter%20Governmental%20Commission%20on%20Economic,%20Scientific%20and%20Technical%20Cooperation%20With%20Russia.html",
    function () {
        var t = $(".publications_holder > h2")[0].innerText.trim();
        var ps = $(".publications_holder .caption")[0].innerText.trim();
        $(".publications_holder h2, .publications_holder .caption, .publications_holder img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".publications_holder")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);