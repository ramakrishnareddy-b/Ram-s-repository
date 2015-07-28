/* Moving from -> Corporate Press Releases/USA Sabine Oil & Gas Corporation_list.js */ 
//http://investors.sabineoil.com/phoenix.zhtml?c=92251&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://investors.sabineoil.com/phoenix.zhtml?c=92251&p=irol-news&nyo=0"], function () {
    var urls = [];
    $(".internalpage .ccbnOutline a[target='_blank']").remove();
    $(".internalpage .ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});