/* Moving from -> Corporate Press Releases/Eni S.p.A Italy_list.js */ 
// Eni
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.eni.com/en_IT/media/press-releases/2015/07/Eni_important_gas_discovery_Egyptian_Nile_Delta.shtml",
    function () {
        var t = $(".titolo_nota")[0].innerText.trim();
        var ps = $("#pubblicato")[0].innerText.trim().replace(/\//g, '-').replace(", CET", "");
        var l = window.location.origin + $("#allegato_evidenza ul > li > a").attr("href");
        $("#pubblicato, .titolo_nota, #cronologia, #allegato_evidenza, .col_centro iframe").remove();
        return {
            title: t,
            published_s: ps,
            body: cs.textUpto($(".col_centro")[0].innerText.trim(), "Follow @eni"),
            links: l,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);