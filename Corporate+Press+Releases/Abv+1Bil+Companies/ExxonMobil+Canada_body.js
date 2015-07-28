/* Moving from -> Corporate Press Releases/ExxonMobil Canada_list.js */ 
// ExxonMobil Canada
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://news.exxonmobil.com/press-release/exxonmobil-korea-institute-technology-and-korea-gas-corporation-collaborate-research-a",
    function(){
        return {
            title:$("#bw-content-content .title")[0].innerText,
            published_s: cs.scanForDate($("#bw-content-content .date")[0].innerText,"MMM dd, yyyy"),
            body: $("#bw-content-content .bw-main-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);