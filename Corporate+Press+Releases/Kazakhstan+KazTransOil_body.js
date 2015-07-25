// Kazakhstan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kaztransoil.kz/en/press_centre/press-releases/press-releases/suspension_of_the_order_of_the_chair_of_the_committee_on_regulation_of_natural_monopolies_and_protection_of_competition_of_the_ministry_of_national_economy_of_the_rok_dated_june_19,2015_no247-od/",
    function () {
        var t = jQuery("#start_body h1 span")[0].innerText.trim();
        var ps = jQuery("#start_body .news_date")[0].innerText.trim();
        jQuery("#start_body h1 span, #start_body .news_date, #start_body table, #start_body tbody tr td div").remove();
        return {
            title: t,
            published_s: ps,
            body: jQuery("#start_body tbody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);