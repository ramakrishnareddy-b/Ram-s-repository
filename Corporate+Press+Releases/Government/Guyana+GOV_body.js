// Guyana
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.gina.gov.gy/home/index.php/home/all-news/item/2765-president-granger-implores-psc-to-play-their-role-in-designing-a-new-social-contract-for-guyana",
    function(){
        var b = jQuery(".itemIntroText, .itemFullText");
        jQuery(".itemFullText  img").remove();
        return {
            title:jQuery(".itemHeader > h2").text().trim(),
            body: b.text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);