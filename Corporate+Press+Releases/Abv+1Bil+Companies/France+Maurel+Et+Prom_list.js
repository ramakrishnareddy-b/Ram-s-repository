/* Moving from -> Corporate Press Releases/France Maurel Et Prom_list.js */ 
//http://www.maureletprom.fr/index.php?option=com_content&view=article&id=129&Itemid=116&lang=en
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.maureletprom.fr/index.php?option=com_content&view=article&id=129&Itemid=116&lang=en"], function () {
    var urls = [];
    $('.contentpaneopen tbody tr td span a').each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});