// Archer Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://archerwell.com/archer-limited-second-quarter-2015-results/",
    function () {
        var b = $('.content__body')[0].innerText.trim();
        return {
            title: $("h1.page__header__title")[0].innerText.trim(),
            published_s: cs.scanForDate(b, "MMMM dd, yyyy"),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);