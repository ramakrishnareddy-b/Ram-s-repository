// SK Holdings
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.sk.com/Channel/News/view/1294",
    function () {
        $(".boardview.prev_b").remove();
        var ps = $(".boardview thead .date")[0].innerText.trim();
        $(".boardview thead .company, .boardview thead .date").remove();
        return {
            title: $(".boardview thead")[0].innerText.trim(),
            published_s: ps.replace(/\//g,'-'),
            body: $(".boardview tbody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);