/* Moving from -> Corporate Press Releases/Netherlands SBM Offshore_list.js */ 
//http://www.sbmoffshore.com/press-room/news/
//http://www.sbmoffshore.com/investor-relations-centre/press-releases/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.sbmoffshore.com/press-room/news/", "http://www.sbmoffshore.com/investor-relations-centre/press-releases/"],
    function () {
        var urls = [];
        jQuery('.single-release .release-title a').each(function (idx, el) {
            urls.push(el.href);
        });
        return urls;
    });