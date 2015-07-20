/* Moving from -> Corporate Press Releases/Netherlands Akzo Nobel_list.js */ 
// Netherlands
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.akzonobel.com/news_center/news/news_and_press_releases/2015/akzonobel_supports_70th_anniversary_of_daring_wwii_submarine_rescue_of_uss_cod.aspx",
    function () {
        $("#content_main .figure").remove();
        return {
            title: $("#content_main h1")[0].innerText.trim(),
            published_s: $("#content_main h2")[0].innerText.trim(),
            body: $("#content_main .gutter_right")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);