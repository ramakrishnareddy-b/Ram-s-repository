/* Moving from -> Corporate Press Releases/USA Kinder Morgan Energy Partners L.P_list.js */ 
//  Kinder Morgan Energy Partners L.P
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://news.kindermorgan.com/press-release/all/kinder-morgan-purchase-100-shells-equity-interest-elba-lng-liquefaction-joint-vent",
    function () {
        return {
            title: $("#bw-content-content h1")[0].innerText.trim(),
            published_s: cs.scanForDate($("#bw-content-content .pane-node-date")[0].innerText.trim(), "MMMM dd, yyyy hh:mm aa"),
            body: $("#bw-content-content .pane-pr-body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);