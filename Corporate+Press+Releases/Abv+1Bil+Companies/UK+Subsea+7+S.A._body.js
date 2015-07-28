/* Moving from -> Corporate Press Releases/UK Subsea 7 S.A._list.js */ 
// Subsea 7 S.A.
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.subsea7.com/en/media-centre/media-centre-landing-page-press-releases/subsea-7-s-a--announces-an-internal-reorganisation-and-changes-t.html",
    function () {
        return {
            title: $(".blue_n_plain .title")[0].innerText.trim(),
            published_s: $(".blue_n_plain .date")[0].innerText.trim(),
            body: $(".blue_n_plain .text")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);