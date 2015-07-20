/* Moving from -> Corporate Press Releases/Kuwait Petroleum Corp_list.js */ 
// Kuwait
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("https://www.kpc.com.kw/press/press-release/Pages/KPC-organizes-its-first-oil-camp-for-employees-children.aspx",
    function () {
        var t = $(".ms-rtestate-field h1, .ms-rtestate-field strong")[0].innerText.trim()
        $(".ms-rtestate-field h1, .ms-rtestate-field strong, .ms-rtestate-field img").remove();
        return {
            title: t,
            body: $(".ms-rtestate-field")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);