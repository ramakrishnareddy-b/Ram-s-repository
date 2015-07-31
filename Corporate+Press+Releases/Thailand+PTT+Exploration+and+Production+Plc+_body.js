// PTT Exploration and Production Plc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.pttep.com/en/News-n-Media/Media%20Corner/Press%20Releases/PTTEP%20announces%20payment%20of%20interim%20dividend%20at%201%20Baht%20per%20share.aspx",
    function () {
        $(".box_ct3 .txt_3 .boxContentStyle_6").remove();
        return {
            title: $(".box_ct3 .txt_1")[0].innerText.trim(),
            published_s: $(".box_ct3 .txt_2")[0].innerText.trim(),
            body: $(".box_ct3 .txt_3")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);