/* Moving from -> Corporate Press Releases/Sweden Lundin Petroleum AB_list.js */ 
//https://www.lundin-petroleum.com/eng/press_releases.php
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.lundin-petroleum.com/eng/press_releases.php"], function () {
    var urls = [];
    $(".tdbox a.filetype").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});