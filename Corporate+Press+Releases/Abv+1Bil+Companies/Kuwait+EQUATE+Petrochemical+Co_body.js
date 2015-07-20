/* Moving from -> Corporate Press Releases/Kuwait EQUATE Petrochemical Co_list.js */ 
// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.equate.com/news/templates/Equate_template.aspx?articleid=234&zoneid=1",
    function () {
        var t = $("#threecols h2")[0].innerText.trim();
        var ps = $("#threecols strong")[0].innerText.trim();
        $("#threecols h2, #threecols strong, #threecols img").remove();
        return {
            title: t,
            published_s: ps,
            body: $("#threecols")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);