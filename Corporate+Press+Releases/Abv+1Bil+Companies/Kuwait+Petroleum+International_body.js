/* Moving from -> Corporate Press Releases/Kuwait Petroleum International_list.js */ 
// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.q8.com/content/our-news/news-items/Pages/Q8%20opens%20its%20first%20highway%20site%20in%20Luxembourg.aspx",
    function () {
        $(".ms-bodyareaframe .con1Body img").remove();
        return {
            title: $(".ms-bodyareaframe .con1Heading")[0].innerText.trim(),
            body: $(".ms-bodyareaframe .con1Body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);