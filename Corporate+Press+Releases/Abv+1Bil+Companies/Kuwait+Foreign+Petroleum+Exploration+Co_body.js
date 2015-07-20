/* Moving from -> Corporate Press Releases/Kuwait Foreign Petroleum Exploration Co_list.js */ 
// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.kufpec.com/AboutKUFPEC/KUFPECNews/Pages/NoTimetoGoWobbly.aspx#myAnchor",
    function () {
        $(".data_04_spacer .pageContent img, .data_04_spacer .pageContent a").remove();
        return {
            title: $(".data_04_spacer .PageTitle")[0].innerText.trim(),
            body: $(".data_04_spacer .pageContent")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);