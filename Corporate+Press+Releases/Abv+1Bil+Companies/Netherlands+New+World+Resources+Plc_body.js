/* Moving from -> Corporate Press Releases/Netherlands New World Resources Plc_list.js */ 
// New World Resources Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.newworldresources.eu/en/media/press-releases/2015/Q2%202015%20Trading%20Update",
    function () {
        return {
            title: $(".news h2")[0].innerText.trim(),
            published_s: $(".news .date")[0].innerText.trim().replace(/\//g,'-'),
            body: $(".news .wisiwig")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);