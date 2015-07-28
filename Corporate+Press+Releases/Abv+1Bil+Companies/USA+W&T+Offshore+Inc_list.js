/* Moving from -> Corporate Press Releases/USA W&T Offshore Inc_list.js */ 
//http://ir.wtoffshore.com/phoenix.zhtml?c=179783&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://ir.wtoffshore.com/phoenix.zhtml?c=179783&p=irol-news&nyo=0"], function () {
    var urls = [];
    $(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});