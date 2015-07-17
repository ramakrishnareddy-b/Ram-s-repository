// Libya
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://noc.ly/index.php/en/new-4/953-the-statement-by-the-national-oil-corporation-,-the-national-general-company-for-maritime-transport-and-the-general-company-for-electricity-concerning-the-incident-of-shelling-the-tanker-%E2%80%9C-anwar-africa%E2%80%9D-at-the-gulf-steam-station-in-sirt-city-2",
    function () {
        jQuery(".item-page img").remove();
        return {
            title: jQuery(".item-page .article-title")[0].innerText.trim(),
            body: jQuery(".item-page .article-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);