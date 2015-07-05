// Madagascar
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://mae.gov.mg/prix-de-linternational-catering-cup-2015-de-lyon-le-trophee-revient-a-madagascar/",
    function () {
        return {
            title: jQuery(".entry-content h1")[0].innerText,
            published_s: jQuery(".entry-content .article-attributes ul>li:first")[0].innerText.split(" : ")[1],
            body: jQuery(".entry-content .article")[0].innerText,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);