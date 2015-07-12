// Guinea Conakry

var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.presidence.gov.gn/index.php/15-actualites/498-declaration-des-chefs-detat-et-de-gouvernement-de-lunion-du-fleuve-mano-sur-les-modalites-de-preparation-de-la-conference-plaidoyer-new-york",
    function(){
        var t = jQuery("#artcle-heading > h2")[0].innerText;
        jQuery("#content .item-page #artcle-heading, #content .item-page .itp-social-buttons-box").remove();
        return {
            title:t,
            body:jQuery("#content .item-page")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);