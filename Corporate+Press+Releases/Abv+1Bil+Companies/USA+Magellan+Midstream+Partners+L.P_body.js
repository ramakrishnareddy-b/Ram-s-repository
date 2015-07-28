/* Moving from -> Corporate Press Releases/USA Magellan Midstream Partners L.P_list.js */ 
// Magellan Midstream Partners L.P
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.magellanlp.com/magellannews.aspx?id=2147484073",
    function () {
        return {
            title: $("#titleLbl")[0].innerText.trim(),
            published_s: $("#pr-date")[0].innerText.trim(),
            body: $("#ContentBlock1")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);