// BG Group
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.bg-group.com/~/tiles/?tiletype=pressrelease&id=799#opentile",
    function () {
        var t = $(".articlecontent header .h1")[0].innerText.trim();
        var ps = $(".articlecontent header .hidden")[0].innerText.trim();
        $(".articlecontent header, .articlecontent footer").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".articlecontent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);