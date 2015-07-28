/* Moving from -> Corporate Press Releases/Japan JAMSTEC_list.js */ 
// Japan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.jamstec.go.jp/e/about/press_release/20150724_2/",
    function () {
        $("#contents_area #press_honbun img").remove();
        return {
            title: $("#contents_area #title")[0].innerText.trim(),
            published_s: cs.scanForDate($("#contents_area #date, #contents_area .date2")[0].innerText.trim(),"MMMM dd, yyyy"),
            body: $("#contents_area #press_honbun")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);