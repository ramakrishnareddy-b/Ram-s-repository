// Mauritania
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.diplomatie-mr.com/maec/site/index.php?option=com_content&view=article&id=925:notre-pays-participe-a-la-3eme-conference-internationale-sur-le-financement-du-developpement-a-addis-abeba&catid=78&Itemid=649&lang=fr",
    function(){
        jQuery(".item-page .art-post .art-postcontent img").remove();
        return {
            title: jQuery(".item-page .art-post h2")[0].innerText.trim(),
            published_s: jQuery(".item-page .art-post .art-postdateicon")[0].innerText.trim().replace("Créé ",""),
            body: jQuery(".item-page .art-post .art-postcontent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);