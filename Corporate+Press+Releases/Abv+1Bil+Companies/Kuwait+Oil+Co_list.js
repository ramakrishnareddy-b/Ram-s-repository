/* Moving from -> Corporate Press Releases/Kuwait Oil Co_list.js */ 
//http://www.kockw.com/sites/EN/Pages/Media%20Center/News%20And%20Events/Allitems.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kockw.com/sites/EN/Pages/Media%20Center/News%20And%20Events/Allitems.aspx"], function () {
    var urls = [];
    $("#NewsListOuterTable a.NewsListItemTitle_Link").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});