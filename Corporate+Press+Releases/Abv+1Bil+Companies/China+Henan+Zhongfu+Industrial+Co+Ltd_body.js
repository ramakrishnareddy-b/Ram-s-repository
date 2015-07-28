/* Moving from -> Corporate Press Releases/China Henan Zhongfu Industrial Co Ltd_list.js */ 
// Henan Zhongfu Industrial Co Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.zfmetals.com/news/35.html",
    function () {
        var t = $("#senfe .con_nr .ftit")[0].innerText.trim();
        $("#senfe .con_nr img, #senfe .con_nr script").remove();
        return {
            title: t,
            body: $("#senfe .con_nr")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);