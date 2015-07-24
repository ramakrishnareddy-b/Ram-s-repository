//http://investor.markwest.com/phoenix.zhtml?c=135034&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investor.markwest.com/phoenix.zhtml?c=135034&p=irol-news&nyo=0"], function () {
    var urls = [];
    var count = -1;
    $(".ccbnOutline .ccbnTblOdd a, .ccbnOutline .ccbnTblEven a").each(function (idx, el) {
        if(++count % 2 == 0){
            urls.push(el.href);
        }
    });
    return urls;
});