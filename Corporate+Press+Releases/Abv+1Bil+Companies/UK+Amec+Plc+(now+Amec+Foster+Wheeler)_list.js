/* Moving from -> Corporate Press Releases/UK Amec Plc (now Amec Foster Wheeler)_list.js */ 
//http://www.amecfw.com/media
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.amecfw.com/media"], function () {
    var urls = [];
    $(".investor-info li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});