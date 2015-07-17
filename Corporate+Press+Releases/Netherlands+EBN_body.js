// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.ebn.nl/ebn-nieuws/tot-2020-geen-commerciele-schaliegasactiviteiten-in-nederland-2/",
    function () {
        var t = $(".bigNewsBlock h2")[0].innerText.trim();
        var ps = $(".bigNewsBlock .newsDate")[0].innerText.trim();
        $(".bigNewsBlock h2, .bigNewsBlock .newsDate, .bigNewsBlock img, .bigNewsBlock .tag").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".bigNewsBlock")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);