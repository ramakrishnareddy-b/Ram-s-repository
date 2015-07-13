// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mediacentre.go.ug/press-release/false-and-misleading-broadcasts",
    function () {
        var t = $(".js_equal_right h1")[0].innerText.trim();
        var ps = $(".js_equal_right h2")[0].innerText.trim();
        $(".js_equal_right h1, .js_equal_right h2, .js_equal_right section, .js_equal_right .type-tag, .js_equal_right .image").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".js_equal_right")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);