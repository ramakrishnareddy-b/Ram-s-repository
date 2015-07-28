/* Moving from -> Corporate Press Releases/Japan Fuji Oil Co_list.js */ 
// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.foc.co.jp/en/ir/meeting.html",
    function () {
        var urls = [];
        $("#contents section .list_01 a, #contents .arrow_01 a").each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            title: $("#contents section h2, #contents h1")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);
