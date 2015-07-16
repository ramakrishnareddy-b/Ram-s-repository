// Guinea Conakry
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://gn.chineseembassy.org/fra/zxxx/t1281227.htm",
    function () {
        return {
            title: $("#article font")[0].innerText.trim(),
            published_s: $("#article font")[2].innerText.trim(),
            body: $("#article .defaultfont")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);