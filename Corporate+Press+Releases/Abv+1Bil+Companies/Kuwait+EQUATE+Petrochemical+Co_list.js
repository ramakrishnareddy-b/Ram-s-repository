/* Moving from -> Corporate Press Releases/Kuwait EQUATE Petrochemical Co_list.js */ 
//http://www.equate.com/en_News_Releases.cms
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.equate.com/en_News_Releases.cms"], function () {
    var urls = [];
    $("#threecols .boddetail .link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});