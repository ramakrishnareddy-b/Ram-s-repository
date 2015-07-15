// Morocco
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.diplomatie.ma/LeMinist%C3%A8re/Lavieinterne/tabid/124/vw/1/ItemID/12270/language/en-US/Default.aspx",
    function () {
        var t = $(".ModAdvancedArticlesC .titre_artcile1")[0].innerText.trim();
        var ps = $(".ModAdvancedArticlesC .titre_artcile2")[0].innerText.trim().replace(/\./g,'-');
        $(".ModAdvancedArticlesC .titre_artcile1, .ModAdvancedArticlesC .titre_artcile2, .ModAdvancedArticlesC img").remove();
        return {
            title: t,
            published_s: ps,
            body: $(".ModAdvancedArticlesC")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);