/* Moving from -> Corporate Press Releases/USA Helix Energy Solutions Group_list.js */ 
// Helix Energy Solutions Group
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://phx.corporate-ir.net/phoenix.zhtml?c=94139&p=irol-newsArticle&ID=2069294",
    function () {
        var b = $(".entry-content .ccbnTxt")[0].innerText.trim();
        return {
            title: $(".entry-content .ccbnTtl")[0].innerText.trim(),
            published_s: $(".entry-content .ccbnTxt")[0].innerText.trim().split("--")[2].replace(/\./g,''),
            body: b,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);