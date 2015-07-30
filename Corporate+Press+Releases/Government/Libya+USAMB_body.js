// Libya
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.state.gov/r/pa/prs/ps/2015/06/243331.htm",
    function () {
        return {
            title: $("#middlecolumn .tier3-headline")[0].innerText.trim(),
            published_s: $("#middlecolumn #date_long")[0].innerText.trim(),
            body: $("#middlecolumn #centerblock")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);