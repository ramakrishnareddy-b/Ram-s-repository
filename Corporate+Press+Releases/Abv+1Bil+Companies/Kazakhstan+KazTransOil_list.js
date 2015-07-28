/* Moving from -> Corporate Press Releases/Kazakhstan KazTransOil_list.js */ 
//http://www.kaztransoil.kz/en/press_centre/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.kaztransoil.kz/en/press_centre/"],
    function () {
        var urls = [];
        jQuery('#body b a').each(function (idx, el) {
            urls.push(el.href);
        });
        return urls;
    });