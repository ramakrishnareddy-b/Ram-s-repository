// Energy Investments Global Ltd 
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.eigpartners.com/news/press-releases/eig-hires-rob-johnson-us-head-oil-gas-direct-lending-1",
    function () {
        return {
            title: $("section.col-md-9 .page-title")[0].innerText.trim(),
            published_s: $("section.col-md-9 .datetime")[0].innerText.trim(),
            body: $("section.col-md-9 .field-name-body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);