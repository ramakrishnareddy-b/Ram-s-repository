// WorleyParsons Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.worleyparsons.com/InvestorRelations/ASX/Pages/ContractforFennovoimaHanhikivi-1NuclearPowerPlantinFinland.aspx",
    function () {
        var l = window.location.origin +  $(".pageContent .pageContentLhs .NewsBody a").attr("href");
        $(".pageContent .pageContentLhs .infoitem label, .pageContent .pageContentLhs .NewsBody .hangingimage, .pageContent .pageContentLhs .NewsBody a").remove();
        return {
            title: $(".pageContent #pageTitle h1")[0].innerText.trim(),
            published_s: $(".pageContent .pageContentLhs .infoitem")[0].innerText.trim(),
            body: $(".pageContent .pageContentLhs .NewsBody")[0].innerText.trim(),
            links: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);