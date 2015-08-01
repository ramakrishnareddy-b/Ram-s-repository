//  Fangda Carbon New Material Co Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.fangdacarbon.com/en/product/a/default.shtml",
    function () {
        var t = $("td[valign='top'] table[width='95%'] h1")[0].innerText.trim();
        $("td[valign='top'] table[width='95%'] h1, td[valign='top'] table[width='95%'] table[width='98%']").remove();
        return {
            title: t,
            body: $("td[valign='top'] table[width='95%']")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);