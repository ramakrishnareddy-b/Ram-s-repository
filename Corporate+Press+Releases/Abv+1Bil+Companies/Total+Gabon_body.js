/* Moving from -> Corporate Press Releases/Total Gabon_list.js */ 
// Total Gabon
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.total.ga/fr/resultats-du-premier-semestre-2015",
    function () {
        var urls = [];
        jQuery(".block-news .list-downloads a").each(function (idx, el) {
            urls.push(el.href);
        });
        return {
            title: jQuery(".block-news h1")[0].innerText.trim(),
            published_s: jQuery(".block-news time")[0].innerText.trim().replace(/\//g,'-'),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);