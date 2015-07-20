/* Moving from -> Corporate Press Releases/Kuwait Oil Co_list.js */ 
//Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kockw.com/sites/EN/Pages/Media%20Center/News%20And%20Events/RamadanFutsal2015.aspx",
    function () {
        $(".InnerPageTextEditor .welcome-content img").remove();
        return {
            title: $(".InnerPageTextEditor .NewsTitle")[0].innerText.trim(),
            published_s: $(".InnerPageTextEditor .date-line")[0].innerText.trim().replace(/\//g, '-'),
            body: $(".InnerPageTextEditor .welcome-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);