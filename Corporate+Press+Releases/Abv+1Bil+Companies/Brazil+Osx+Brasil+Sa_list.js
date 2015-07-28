/* Moving from -> Corporate Press Releases/Brazil Osx Brasil Sa_list.js */ 
//http://www.osx.com.br/cgi/cgilua.exe/sys/start.htm?sid=115&lng=us
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.osx.com.br/cgi/cgilua.exe/sys/start.htm?sid=115&lng=us"], function () {
    var urls = [];
    $(".textodamateria a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});