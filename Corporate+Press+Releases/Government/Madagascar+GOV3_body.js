// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://eiti-madagascar.org/news/visite-officielle-a-madagascar-de-mrs-clare-short-presidente-de-leiti-international/",
    function () {
        return {
            title: jQuery(".content h2")[0].innerText,
            published_s: jQuery(".content .breadcrumbs")[0].innerText.split(" > ")[1].replace(/\./g, '-'),
            body: cs.textUpto(jQuery(".content .post p").text(), "Tanteliarimiza Rakotomalala"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);