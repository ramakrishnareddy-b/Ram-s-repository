// Amec Plc (now Amec Foster Wheeler)
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.amecfw.com/media/news-releases/2015/excellent-physics-employer",
    function () {
        var t = $(".editable-content h1")[0].innerText.trim();
        $(".editable-content h1").remove();
        return {
            title: t,
            published_s: $(".column.left p")[0].innerText.trim(),
            body: $(".editable-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);