/* Moving from -> Corporate Press Releases/USA Boardwalk Pipeline Partners_list.js */ 
//http://phx.corporate-ir.net/phoenix.zhtml?c=193443&p=irol-news&nyo=0
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://phx.corporate-ir.net/phoenix.zhtml?c=193443&p=irol-news&nyo=0"], function () {
    var urls = [];
    var count = -1;
    jQuery(".ccbnOutline a.ccbnTblLnk").each(function (idx, el) {
        if(++count%2 == 0){
            urls.push(el.href);
        }
    });
    return urls;
});