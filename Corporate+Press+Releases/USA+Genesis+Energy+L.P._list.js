//http://www.genesisenergy.com/index.cfm?md=newsroom&tmp=archives&catid=1
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.genesisenergy.com/index.cfm?md=newsroom&tmp=archives&catid=1"], function () {
    var urls = [];
    $(".clearBoth a.archiveHead").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});