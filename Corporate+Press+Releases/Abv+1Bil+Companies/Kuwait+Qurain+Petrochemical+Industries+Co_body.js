/* Moving from -> Corporate Press Releases/Kuwait Qurain Petrochemical Industries Co_list.js */ 
// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.qpic-kw.com/newsDetails.php?newsid=91",
    function () {
        jQuery(".norepeat").remove();
        return {
            title: jQuery(".blueLightFont")[0].innerText.trim(),
            published_s: jQuery(".blueDarkFont")[0].innerText.trim(),
            body: jQuery("td[colspan]")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);