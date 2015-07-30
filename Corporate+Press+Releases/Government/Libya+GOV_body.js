// Libya
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://translate.googleusercontent.com/translate_c?depth=1&hl=en&prev=search&rurl=translate.google.com.sg&sl=ar&u=http://www.pm.gov.ly/news/item/3159-%25D8%25A8%25D9%258A%25D8%25A7%25D9%2586-%25D8%25AD%25D9%2583%25D9%2588%25D9%2585%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25A5%25D9%2586%25D9%2582%25D8%25A7%25D8%25B0-%25D8%25A7%25D9%2584%25D9%2588%25D8%25B7%25D9%2586%25D9%258A-%25D8%25A8%25D8%25B4%25D8%25A3%25D9%2586-%25D8%25B9%25D9%258A%25D8%25AF-%25D8%25A7%25D9%2584%25D9%2581%25D8%25B7%25D8%25B1-%25D8%25A7%25D9%2584%25D9%2585%25D8%25A8%25D8%25A7%25D8%25B1%25D9%2583.html&usg=ALkJrhg0vxydSVuUoysJ6WEf1SO51Qzwlg",
    function () {
        $(".itemView .google-src-text").remove();
        return {
            title: $(".itemView .itemTitle")[0].innerText.trim(),
            published_s: $(".itemView .itemDateCreated")[0].innerText.trim(),
            body: $(".itemView .itemBody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);