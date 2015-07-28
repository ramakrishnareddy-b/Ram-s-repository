/* Moving from -> Corporate Press Releases/Eni S.p.A Italy_list.js */ 
//http://www.eni.com/en_IT/media/media.page?home_2010_it_tab=navigation_menu
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.eni.com/en_IT/media/media.page?home_2010_it_tab=navigation_menu"], function () {
    var urls = [];
    $(".news .media_news h3 a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});